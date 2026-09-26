"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { getChatHistory, getDashboardData } from "@/app/actions";

export default function ChatWidget() {
  const [userId, setUserId] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [sessions, setSessions] = useState<{ id: string; title?: string; messages?: any[] }[]>([]);
  const [currentSessionId, setCurrentSessionId] = useState<string | null>(null);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<{ role: string; content: string }[]>([]);
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    getDashboardData().then((res) => {
      const user = res?.user as { id: string } | undefined;
      if (user?.id) {
        setUserId(user.id);
      }
    });
  }, []);

  const loadHistory = useCallback(async () => {
    if (!userId) return;
    const history = await getChatHistory(userId);
    setSessions(history);
    if (history.length > 0 && !currentSessionId) {
      setCurrentSessionId(history[0].id);
      setMessages(history[0].messages || []);
    }
  }, [userId, currentSessionId]);

  useEffect(() => {
    if (userId && isOpen) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      loadHistory();
    }
  }, [userId, isOpen, loadHistory]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const selectSession = (session: { id: string; messages?: any[] }) => {
    setCurrentSessionId(session.id);
    setMessages(session.messages || []);
  };

  const startNewChat = () => {
    setCurrentSessionId(null);
    setMessages([]);
  };

  const sendMessage = async () => {
    if (!input.trim() || !userId) return;

    const userMessage = { role: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          userId,
          message: userMessage.content,
          sessionId: currentSessionId,
        }),
      });

      const data = await res.json();
      
      if (data.finalOutput) {
        setMessages((prev) => [...prev, { role: "ai", content: data.finalOutput }]);
      } else if (data.messages && data.messages.length > 0) {
        // Fallback to the last message if finalOutput is missing
        const lastMsg = data.messages[data.messages.length - 1];
        setMessages((prev) => [...prev, { role: "ai", content: lastMsg.kwargs?.content || "No response" }]);
      }

      // Reload history to get updated session ID if it was a new chat
      loadHistory();

    } catch (err) {
      console.error(err);
      setMessages((prev) => [...prev, { role: "ai", content: "Sorry, an error occurred." }]);
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) {
    return (
      <button
        aria-label="Open Chat"
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 w-14 h-14 bg-primary text-on-primary rounded-full shadow-lg flex items-center justify-center hover:bg-primary-fixed transition-all z-50"
      >
        <span className="material-symbols-outlined text-2xl">chat</span>
      </button>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 w-[400px] h-[600px] bg-surface-container-low border border-surface-container-highest rounded-2xl shadow-2xl flex overflow-hidden z-50 text-on-surface">
      {/* Sidebar - Chat History */}
      <div className="w-1/3 bg-surface-container-lowest border-r border-surface-container-highest flex flex-col h-full">
        <div className="p-3 border-b border-surface-container-highest flex justify-between items-center bg-surface-container">
          <span className="font-headline-sm text-sm font-bold">History</span>
          <button aria-label="Start New Chat" onClick={startNewChat} className="text-primary hover:bg-surface-container-high p-1 rounded transition-colors">
            <span className="material-symbols-outlined text-sm">add</span>
          </button>
        </div>
        <div className="flex-1 overflow-y-auto p-2 space-y-1">
          {sessions.map((session) => (
            <button
              key={session.id}
              onClick={() => selectSession(session)}
              className={`w-full text-left px-2 py-2 text-xs font-body-sm rounded truncate ${currentSessionId === session.id ? 'bg-primary-container text-on-primary-container' : 'hover:bg-surface-container-high'}`}
            >
              {session.title || "New Chat"}
            </button>
          ))}
          {sessions.length === 0 && (
            <div className="text-xs text-on-surface-variant p-2 text-center mt-4">
              No previous conversations
            </div>
          )}
        </div>
      </div>

      {/* Main Chat Area */}
      <div className="w-2/3 flex flex-col h-full bg-[#0a0e17]">
        <div className="p-3 border-b border-surface-container-highest flex justify-between items-center bg-surface-container">
          <span className="font-headline-sm text-sm font-bold">NyayaGen Copilot</span>
          <button aria-label="Close Chat" onClick={() => setIsOpen(false)} className="text-on-surface-variant hover:text-on-surface">
            <span className="material-symbols-outlined text-sm">close</span>
          </button>
        </div>

        <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-on-surface-variant text-center space-y-2">
              <span className="material-symbols-outlined text-4xl text-primary opacity-50">auto_awesome</span>
              <p className="text-sm">How can I assist you with your legal matters today?</p>
            </div>
          ) : (
            messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-3 rounded-lg text-sm ${msg.role === 'user' ? 'bg-primary text-on-primary rounded-tr-none' : 'bg-surface-container text-on-surface rounded-tl-none'}`}>
                  {msg.content}
                </div>
              </div>
            ))
          )}
          {loading && (
            <div className="flex justify-start">
              <div className="bg-surface-container p-3 rounded-lg text-sm rounded-tl-none text-on-surface-variant flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-tertiary animate-pulse"></span>
                Thinking...
              </div>
            </div>
          )}
        </div>

        <div className="p-3 border-t border-surface-container-highest bg-surface-container-lowest">
          <div className="flex items-center gap-2">
            <input
              type="text"
              aria-label="Message AI"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
              placeholder="Message AI..."
              className="flex-1 bg-surface-container border border-surface-container-highest rounded-lg px-3 py-2 text-sm text-on-surface outline-none focus:border-primary"
              disabled={loading || !userId}
            />
            <button
              aria-label="Send Message"
              onClick={sendMessage}
              disabled={loading || !userId || !input.trim()}
              className="bg-primary text-on-primary p-2 rounded-lg hover:bg-primary-fixed disabled:opacity-50 transition-colors"
            >
              <span className="material-symbols-outlined text-sm">send</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
