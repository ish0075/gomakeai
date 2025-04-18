"use client";
import React from "react";

const agents = [
  {
    name: "Stef AI",
    role: "Prompt Master",
    description: "Expert in crafting the perfect AI prompts to unlock your ideas.",
    image: "/images/agents/stef-ai.png",
  },
  {
    name: "Curt Dog",
    role: "Full Stack Dev",
    description: "Handles frontend, backend, and everything in between — fast, clean, and cool.",
    image: "/images/agents/curt-dog.png",
  },
  {
    name: "Clarissa",
    role: "UI Designer",
    description: "Crafts beautiful, intuitive interfaces that wow users.",
    image: "/images/agents/clarissa.png",
  },
  {
    name: "Big D",
    role: "Data Analyst",
    description: "Makes sense of numbers and insights with clarity and precision.",
    image: "/images/agents/big-d.png",
  },
  {
    name: "Samartino",
    role: "Automation Architect",
    description: "Builds smart workflows to automate your entire process end to end.",
    image: "/images/agents/samartino.png",
  },
  {
    name: "Tio",
    role: "Delivery Bot",
    description: "Retrieves your builds and delivers completed projects with wagging excitement.",
    image: "/images/agents/tio.png",
  },
  {
    name: "Brandzilla",
    role: "Branding Bot",
    description: "Creates irresistible brand names, logos, and taglines that leave a mark.",
    image: "/images/agents/brandzilla.png",
  },
  {
    name: "BuzzBot",
    role: "Marketing Genius",
    description: "Launches buzz-worthy campaigns that attract users and customers.",
    image: "/images/agents/buzzbot.png",
  },
  {
    name: "OutreachBot",
    role: "Email Campaign Strategist",
    description: "Writes compelling emails and manages automated email flows.",
    image: "/images/agents/outreachbot.png",
  },
  {
    name: "Stacksy",
    role: "Product Builder",
    description: "Knows what features to build and how to bring products to life fast.",
    image: "/images/agents/stacksy.png",
  },
  {
    name: "Lexa",
    role: "Legal Advisor",
    description: "Handles terms, contracts, and legal docs without the headache.",
    image: "/images/agents/lexa.png",
  },
  {
    name: "DocDrop",
    role: "Document Bot",
    description: "Drops polished PDFs, summaries, and docs in seconds.",
    image: "/images/agents/docdrop.png",
  },
  {
    name: "StrategyBot",
    role: "Business Strategist",
    description: "Helps you define your roadmap, pricing, and go-to-market.",
    image: "/images/agents/strategybot.png",
  },
  {
    name: "CommerceBot",
    role: "E-commerce Integrator",
    description: "Connects your store, checkout, and product listings seamlessly.",
    image: "/images/agents/commercebot.png",
  },
  {
    name: "RepairBot",
    role: "Debug Expert",
    description: "Identifies and patches bugs before they reach production.",
    image: "/images/agents/repairbot.png",
  },
  {
    name: "Research GTP",
    role: "Market Researcher",
    description: "Digs deep into competitors, trends, and data-backed insights.",
    image: "/images/agents/researchgtp.png",
  },
  {
    name: "Scraper GTP",
    role: "Data Crawler",
    description: "Collects and structures data from anywhere on the web.",
    image: "/images/agents/scrapergtp.png",
  },
];

export default function HomePageAgents() {
  return (
    <div className="bg-black text-white py-16 px-4">
      <h2 className="text-4xl font-bold text-center mb-4">Meet the MegaGTP Agents</h2>
      <p className="text-center text-zinc-400 mb-12 max-w-2xl mx-auto">
        Our intelligent agents are here to supercharge your workflow. From design to deployment — there's a MegaGTP for that.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {agents.map((agent, idx) => (
          <div key={idx} className="bg-zinc-900 p-6 rounded-xl shadow-md text-center transition hover:scale-105">
            <img
              src={agent.image}
              alt={agent.name}
              className="mx-auto w-24 h-24 object-contain mb-4"
            />
            <h3 className="text-xl font-semibold">{agent.name}</h3>
            <p className="text-purple-400 font-medium">{agent.role}</p>
            <p className="text-zinc-300 mt-2 text-sm">{agent.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
