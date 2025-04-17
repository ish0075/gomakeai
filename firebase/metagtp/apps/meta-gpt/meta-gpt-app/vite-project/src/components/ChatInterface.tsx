// src/components/ChatInterface.tsx

import { useState, useEffect, useRef } from "react";
import { streamOpenAIResponse } from "../lib/openai";
import { db } from "../lib/firebase";
import {
  collection,
  addDoc,
  updateDoc,
  serverTimestamp,
  query,
  orderBy,
  onSnapshot,
  DocumentReference,
} from "firebase/firestore";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import typingAnimation from "../lottie/typing.json";

type Message = { sender: "user" | "bot"; text: string };

export default function ChatInterface() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Auto‑scroll on new messages
  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim()) return;
    const userText = input;
    setInput("");
    setLoading(true);

    // Persist user message
    await addDoc(collection(db, "messages"), {
      sender: "user",
      text: userText,
      timestamp: serverTimestamp(),
    });

    // Placeholder bot doc
    const botDocRef: DocumentReference = await addDoc(
      collection(db, "messages"),
      { sender: "bot", text: "", timestamp: serverTimestamp() }
    );

    // Stream and update
    let reply = "";
    streamOpenAIResponse(userText, (token) => {
      reply += token;
      updateDoc(botDocRef, { text: reply });
    })
      .catch((err) => {
        updateDoc(botDocRef, { text: `❌ Error: ${err.message}` });
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="w-full max-w-2xl mx-auto bg-black/30 border border-purple-700 shadow-lg rounded-2xl p-6">
      {/* Chat history */}
      <div
        ref={scrollRef}
        className="h-64 overflow-y-auto mb-6 space-y-4 bg-black/20 p-4 rounded-xl"
      >
        {messages.map((msg, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: msg.sender === "user" ? 50 : -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.2 }}
            className={`flex items-start space-x-3 ${
              msg.sender === "user" ? "justify-end" : ""
            }`}
          >
            {msg.sender === "bot" && (
              <img src="/avatars/bot.png" className="w-8 h-8 rounded-full" />
            )}
            <div
              className={`px-4 py-2 rounded-2xl max-w-[75%] whitespace-pre-wrap break-words ${
                msg.sender === "user"
                  ? "bg-purple-600 text-white self-end shadow-inner"
                  : "bg-gray-800 text-white shadow"
              }`}
            >
              {msg.text}
            </div>
            {msg.sender === "user" && (
              <img src="/avatars/user.png" className="w-8 h-8 rounded-full" />
            )}
          </motion.div>
        ))}

        {loading && (
          <div className="flex justify-center">
            <Lottie
              animationData={typingAnimation}
              loop
              style={{ width: 80, height: 80 }}
            />
          </div>
        )}
      </div>

      {/* Input area */}
      <div className="flex items-center space-x-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          className="flex-grow bg-gray-800 text-white px-4 py-3 rounded-xl outline-none placeholder-gray-400 shadow-inner"
          placeholder="Type your message..."
        />
        <button
          onClick={sendMessage}
          disabled={loading}
          className="bg-gradient-to-r from-purple-600 to-purple-400 hover:from-purple-500 hover:to-purple-300 text-white px-6 py-3 rounded-xl disabled:opacity-50 shadow-lg"
        >
          Send
        </button>
      </div>
    </div>
  );
}
