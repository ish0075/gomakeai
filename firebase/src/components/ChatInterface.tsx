import { useState, useRef, useEffect } from "react";
import { fetchOpenAIResponse } from "../lib/openai";

export default function ChatInterface() {
  const [messages, setMessages] = useState<string[]>([]);
  const [input, setInput] = useState("");
  const endRef = useRef<HTMLDivElement>(null);

  const sendMessage = async () => {
    const trimmed = input.trim();
    if (!trimmed) return;

    // add user message
    setMessages((m) => [...m, `🧑💻 You: ${trimmed}`]);
    setInput("");

    try {
      const reply = await fetchOpenAIResponse(trimmed);
      setMessages((m) => [...m, `🤖 AI: ${reply}`]);
    } catch (err: any) {
      setMessages((m) => [...m, `❗️ Error: ${err.message}`]);
    }
  };

  // scroll to bottom on new message
  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="w-full max-w-2xl mx-auto bg-black/20 border border-purple-600 rounded-xl p-6">
      <div className="h-64 overflow-y-auto mb-4 space-y-2">
        {messages.map((msg, i) => (
          <p key={i} className="text-sm text-white">
            {msg}
          </p>
        ))}
        <div ref={endRef} />
      </div>
      <div className="flex">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          className="flex-grow bg-gray-800 text-white px-4 py-2 rounded-l-md outline-none"
          placeholder="Type your message..."
        />
        <button
          onClick={sendMessage}
          className="bg-purple-600 hover:bg-purple-500 text-white px-4 py-2 rounded-r-md"
        >
          Send
        </button>
      </div>
    </div>
  );
}
