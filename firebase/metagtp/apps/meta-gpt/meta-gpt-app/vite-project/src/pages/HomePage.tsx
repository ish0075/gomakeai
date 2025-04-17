// src/pages/HomePage.tsx
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-6">
      <h1 className="text-5xl font-bold mb-4">Welcome to Meta GTP</h1>
      <p className="mb-6">Click below to jump into the chat interface.</p>
      <Link to="/chat" className="bg-purple-600 hover:bg-purple-500 text-white px-6 py-3 rounded-xl">
        Go to Chat
      </Link>
    </main>
  );
}
