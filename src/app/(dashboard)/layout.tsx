import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import ChatWidget from "@/components/ChatWidget";
import { Suspense } from "react";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex h-screen w-full bg-surface-container-lowest overflow-hidden font-body-md text-on-surface">
      <Sidebar />
      <main className="flex-1 flex flex-col h-full overflow-hidden bg-[#0a0e17] text-on-surface relative">
        <Header />
        <div className="flex-1 w-full relative overflow-y-auto">
          {children}
        </div>
      </main>
      <Suspense fallback={null}>
        <ChatWidget />
      </Suspense>
    </div>
  );
}
