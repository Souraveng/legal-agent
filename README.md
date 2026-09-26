# GenAI Legal Assistant

A cutting-edge, agentic legal assistant built with Next.js, LangGraph, and Google Cloud AI. This application transforms complex legal documents into accessible insights, compares contracts, and empowers users to better prepare for professional legal consultations.

---

## 🏆 Evaluation Criteria Alignment

### 1. Code Quality
* **Strong Typing:** Built entirely in **TypeScript**, ensuring strict type safety across the frontend UI, API routes, and LangGraph state interfaces.
* **Modular Architecture:** The agentic logic is cleanly decoupled from the UI. LangGraph nodes (Supervisor, QA, Drafter) exist in isolated modules (`src/lib/agents/nodes.ts`), making the system highly extensible and maintainable.
* **Modern Stack:** Utilizes the Next.js App Router (React Server Components), providing a clean, server-first data fetching paradigm.

### 2. Security
* **Zero-Trust Access:** Integrated **NextAuth.js (Auth.js)** with Google OAuth 2.0. API routes are strictly protected (`getServerSession`), preventing unauthorized execution of AI models.
* **Data Privacy (Cloud DLP):** A dedicated security layer (`src/lib/security/dlp.ts`) leverages the **Google Cloud Data Loss Prevention (DLP) API** to automatically intercept and mask Personal Identifiable Information (SSNs, Credit Cards, Bank Accounts) *before* the text is ever sent to the LLM.
* **Secure Database:** Uses **Prisma ORM** connecting to a Google Cloud SQL instance, natively mitigating SQL injection vulnerabilities. 

### 3. Efficiency
* **Cost-Optimized Routing:** The LangGraph architecture uses a fast, lightweight model (**Gemini 1.5 Flash**) for the initial "Supervisor Agent" to determine intent, reserving the powerful and slightly more expensive **Gemini 1.5 Pro** model only for heavy tasks like contract drafting and comparison.
* **Optimized Containerization:** Configured Next.js for `standalone` output and implemented a multi-stage Dockerfile. This drastically reduces the Docker image footprint, resulting in lightning-fast cold starts and optimized memory usage on Google Cloud Run.
* **Vector Search (RAG):** Instead of stuffing massive documents into the context window for every query, the architecture utilizes `pgvector` in PostgreSQL for efficient Retrieval-Augmented Generation (RAG).

### 4. Testing
* **Test-Driven Security:** Implemented **Vitest** for isolated unit testing. 
* **Mocked Integrations:** Created test suites (e.g., `dlp.test.ts`) that successfully mock Google Cloud SDKs to verify that sensitive PII is correctly intercepted and redacted without making live API calls during CI/CD pipelines.

### 5. Accessibility
* **Semantic UI:** The frontend components are structured using proper semantic HTML (`<main>`, `<nav>`, `<section>`).
* **Screen Reader Support:** Form inputs and buttons are designed with `aria-labels` and visual focus states to ensure compliance with web accessibility standards (WCAG), making the legal assistant usable for everyone.
* **Multimodal Options:** Designed to integrate Google Text-to-Speech (TTS), allowing users with visual impairments or reading difficulties to have legal summaries read aloud to them.

### 6. Problem Statement Alignment
This application directly addresses the core challenge: **making legal information accessible.**
* **Simplifying Jargon:** The "Simplifier Agent" translates archaic legalese into 10th-grade English.
* **Comparing Contracts:** The "Comparison Agent" actively reviews revisions, highlighting missing clauses or new risks.
* **Lawyer Prep Checklist:** Generates actionable outputs to help users prepare for a professional consultation.
* **Strict Boundaries:** Prominent UI disclaimers and system prompts strictly constrain the AI to act as an *assistant* rather than providing binding legal advice.

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- Google Cloud Project (with Vertex AI, DLP, and Document AI enabled)
- PostgreSQL Database

### Installation
1. Clone the repository and install dependencies:
   ```bash
   npm install
   ```
2. Configure your environment variables in `.env` based on `.env.example`.
3. Push the Prisma schema to your database:
   ```bash
   npx prisma db push
   ```
4. Run the development server:
   ```bash
   npm run dev
   ```

### Docker Deployment
Build and deploy to Google Cloud Run:
```bash
docker build -t legal-ai .
gcloud run deploy legal-ai --source . --port 8080
```
