import React from "react";

const teams = [
  {
    name: "Marketing Team",
    description: "Campaign creation, branding, outreach, and email marketing — all automated.",
    agents: ["BuzzBot", "Brandzilla", "OutreachBot"],
  },
  {
    name: "Product Dev Team",
    description: "UI design, frontend/backend development, and full-stack deployment.",
    agents: ["Curt Dog", "Clarissa", "Stacksy"],
  },
  {
    name: "Research & Data Team",
    description: "Intelligent research, web scraping, and data analysis for smarter decisions.",
    agents: ["Research GTP", "Scraper GTP", "Big D"],
  },
  {
    name: "Legal & Docs Team",
    description: "Contract creation, document handling, and legal compliance logic.",
    agents: ["Agent Lexa", "DocDrop"],
  },
  {
    name: "Social Team",
    description: "Post creation, social content scheduling, delivery, and feedback loops.",
    agents: ["Social Media Agent", "Stef AI", "Tio"],
  },
];

export default function HomePageSpecialtyTeams() {
  return (
    <section className="bg-zinc-950 py-20 px-6 text-white">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
        Meet the Specialty Teams
      </h2>

      <div className="grid gap-10 max-w-6xl mx-auto grid-cols-1 md:grid-cols-2">
        {teams.map((team) => (
          <div
            key={team.name}
            className="bg-zinc-900 rounded-2xl p-6 shadow-md hover:shadow-purple-500/30 transition"
          >
            <h3 className="text-2xl font-semibold mb-2">{team.name}</h3>
            <p className="text-sm text-zinc-400 mb-4">{team.description}</p>
            <div className="flex flex-wrap gap-2">
              {team.agents.map((agent) => (
                <span
                  key={agent}
                  className="bg-purple-800/30 border border-purple-600 text-purple-200 text-xs px-3 py-1 rounded-full"
                >
                  {agent}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
