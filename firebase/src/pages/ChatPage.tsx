import ChatInterface from "../components/ChatInterface";

export default function ChatPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-black to-purple-900 text-white px-4">
      <h1 className="text-4xl font-bold mb-6">Meta GTP Chat</h1>
      <ChatInterface />
    </main>
  );
}
