'use client';

import { useState } from 'react';

export default function ChatPage() {
  const [messages, setMessages] = useState<string[]>([]);
  const [input, setInput] = useState('');

  const sendMessage = async () => {
    if (!input.trim()) return;

    setMessages((prev) => [...prev, `🧑 You: ${input}`]);
    setInput('');

    // Simulated bot reply
    setTimeout(() => {
      const botReply = `🤖 Meta GTP: You said "${input}". Let me work on that!`;
      setMessages((prev) => [...prev, botReply]);
    }, 1000);
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-[#1a001f] to-[#0e0012] text-white flex flex-col items-center p-4">
      <h1 className="text-4xl font-bold mb-6 text-center">Welcome to Meta GTP Chat</h1>
      <div className="w-full max-w-2xl flex-1 overflow-y-auto bg-white/5 rounded-lg p-4 mb-4 space-y-2">
        {messages.map((msg, index) => (
          <div key={index} className="bg-white/10 p-3 rounded">{msg}</div>
        ))}
      </div>
      <div className="w-full max-w-2xl flex items-center gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
          className="flex-1 p-3 rounded bg-white/10 text-white border border-white/20 focus:outline-none"
          placeholder="Type your request here..."
        />
        <button
          onClick={sendMessage}
          className="bg-purple-600 hover:bg-purple-800 text-white font-bold py-2 px-4 rounded"
        >
          Send
        </button>
      </div>
    </main>
  );
}
