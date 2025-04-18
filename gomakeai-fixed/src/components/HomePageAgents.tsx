"use client";
import React from "react";

const agents = [
  {
    name: "Architect Agent",
    role: "Design and plan your applications",
    image: "/images/agents/architect-agent.png",
  },
  {
    name: "Marketing Agent",
    role: "Promote your brand and drive growth",
    image: "/images/agents/marketing-agent.png",
  },
  {
    name: "App Builder Agent",
    role: "Develop applications in no time",
    image: "/images/agents/app-builder-agent.png",
  },
  {
    name: "Social Media Agent",
    role: "Create engaging social media content",
    image: "/images/agents/social-media-agent.png",
  },
  {
    name: "SEO Bot",
    role: "Optimize your site to rank higher on search engines",
    image: "/images/agents/seo-bot.png",
  },
];

export default function HomePageAgents() {
  return (
    <section className="py-16 px-6 bg-black text-white">
      <h2 className="text-4xl font-bold mb-4 text-center">Meet Your AI Team</h2>
      <p className="text-zinc-300 text-center mb-12">
        Our intelligent agents are here to supercharge your projects.
        Whatever your idea, we have an AI tool that’s ready to lend a hand.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 justify-center items-center">
        {agents.map((agent, index) => (
          <div
            key={index}
            className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 text-center hover:scale-105 transition-transform duration-300"
          >
            <img
              src={agent.image}
              alt={agent.name}
              className="w-24 h-24 mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold mb-1">{agent.name}</h3>
            <p className="text-zinc-400 text-sm">{agent.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
