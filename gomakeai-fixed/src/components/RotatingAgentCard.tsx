"use client";
import React, { useEffect, useState } from "react";

const agents = [
  {
    name: "Architect Agent",
    role: "Design and plan your applications",
    image: "/images/architect-agent.png",
  },
  {
    name: "Stef AI",
    role: "Prompt Master",
    image: "/images/stef-ai.png",
  },
  {
    name: "Curt Dog",
    role: "Full Stack Dev",
    image: "/images/curt-dog-ai.png",
  },
  {
    name: "Clarissa",
    role: "UI Designer",
    image: "/images/clarissa-ai.png",
  },
  {
    name: "Big D",
    role: "Data Analyst",
    image: "/images/big-d-ai.png",
  },
];

export default function RotatingAgentCard() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % agents.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const agent = agents[index];

  return (
    <div className="flex flex-col items-center transition-opacity duration-500">
      <img
        src={agent.image}
        alt={agent.name}
        className="w-64 md:w-80 lg:w-96 drop-shadow-xl"
      />
      <p className="text-white text-center mt-4 font-semibold text-xl">
        {agent.name}
      </p>
      <p className="text-zinc-400 text-center text-sm">{agent.role}</p>
    </div>
  );
}
