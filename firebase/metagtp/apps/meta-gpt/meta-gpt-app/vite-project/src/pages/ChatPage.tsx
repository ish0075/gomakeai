import Lottie from "lottie-react";
import headerAnim from "../lottie/header.json";

export default function ChatPage() {
  return (
    <main className="...">
      <div className="flex items-center space-x-4 mb-6">
        <Lottie animationData={headerAnim} style={{ width: 60, height: 60 }} loop />
        <h1 className="text-4xl font-bold">Meta GTP Chat</h1>
      </div>
      <ChatInterface />
    </main>
  );
}
