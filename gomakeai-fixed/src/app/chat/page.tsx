'use client';
import React, { useState } from 'react';

export default function ChatPage() {
  const [messages, setMessages] = useState<string[]>([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  async function sendMessage() {
    if (!input.trim()) return;
    setMessages((prev) => [...prev, `🧑: ${input}`]);
    setInput('');
    setLoading(true);

    const res = await fetch('/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: input }),
    });

    const data = await res.json();
    setMessages((prev) => [...prev, `🤖 ${data.agent}: ${data.response}`]);
    setLoading(false);
  }

  return (
    <div className="min-h-screen bg-black text-white p-6">
      <h1 className="text-3xl font-bold mb-4">💬 MegaGTP Chat</h1>
      <div className="space-y-2 mb-6 max-w-3xl mx-auto">
        {messages.map((msg, idx) => (
          <div key={idx} className="bg-zinc-800 p-3 rounded-lg">
            {msg}
          </div>
        ))}
        {loading && <div className="italic text-zinc-400 animate-pulse">🤖 Typing...</div>}
      </div>
      <div className="flex max-w-3xl mx-auto gap-4">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
          placeholder="Ask MegaGTP..."
          className="flex-grow px-4 py-2 rounded bg-zinc-900 border border-zinc-700 text-white"
        />
        <button
          onClick={sendMessage}
          className="px-4 py-2 rounded bg-purple-600 hover:bg-purple-700 font-semibold"
        >
          Send
        </button>
      </div>
    </div>
  );
}
