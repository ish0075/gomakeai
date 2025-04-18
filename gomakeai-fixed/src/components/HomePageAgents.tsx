// src/components/HomePageAgents.tsx
"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";

type Agent = {
  name: string;
  role: string;
  desc: string;
  img: string;
};

const AGENTS: Agent[] = [
  {
    name: "Stef AI",
    role: "Prompt Master",
    desc: "Expert in crafting the perfect AI prompts to unlock your ideas.",
    img: "/images/agents/stef-ai.png",
  },
  {
    name: "Big D",
    role: "Data Analyst",
    desc: "Makes sense of numbers and insights with clarity and precision.",
    img: "/images/agents/big-d-ai.png",
  },
  {
    name: "Curt Dog",
    role: "Full Stack Dev",
    desc: "Handles frontend, backend, and everything in between — fast, clean, and cool.",
    img: "/images/agents/curt-dog-ai.png",
  },
  {
    name: "Samartino",
    role: "Automation Architect",
    desc: "Builds smart workflows to automate your entire process end to end.",
    img: "/images/agents/samartino-ai.png",
  },
  {
    name: "Clarissa",
    role: "UI Designer",
    desc: "Crafts beautiful, intuitive interfaces that wow users.",
    img: "/images/agents/clarissa-ai.png",
  },
  {
    name: "Tio",
    role: "Delivery Bot",
    desc: "Your loyal Maltese assistant who delivers finished apps with a wagging tail.",
    img: "/images/agents/tio-ai.png",
  },
];

export default function HomePageAgents() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const iv = setInterval(() => {
      setCurrent((i) => (i + 1) % AGENTS.length);
    }, 4000);
    return () => clearInterval(iv);
  }, []);

  const { name, role, desc, img } = AGENTS[current];

  return (
    <section className="flex flex-col items-center py-16 bg-black text-white">
      <h2 className="text-4xl font-bold mb-4">Meet Your AI Team</h2>
      <p className="text-gray-400 mb-12 text-center max-w-xl">
        Our intelligent agents are here to supercharge your projects. Whatever
        your idea, we have an AI tool that’s ready to lend a hand.
      </p>
      <div className="relative w-64 h-64">
        <Image
          src={img}
          alt={name}
          fill
          sizes="256px"
          className="rounded-lg object-contain drop-shadow-xl"
        />
      </div>
      <div className="mt-6 text-center">
        <h3 className="text-2xl font-semibold">{name}</h3>
        <p className="text-xl text-purple-400">{role}</p>
        <p className="mt-2 text-gray-300">{desc}</p>
      </div>
    </section>
  );
}
