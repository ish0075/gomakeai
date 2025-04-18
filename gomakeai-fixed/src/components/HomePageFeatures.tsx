import React from "react";

const features = [
  {
    title: "Build",
    icon: "🛠️",
    description: "Quickly develop full-stack apps, websites, and dashboards with AI-assisted agents.",
  },
  {
    title: "Automate",
    icon: "🤖",
    description: "Streamline tasks and workflows with intelligent automation and smart triggers.",
  },
  {
    title: "Deploy",
    icon: "🚀",
    description: "Launch your AI-powered tools to the web with one click—hosted, live, and ready.",
  },
];

export default function HomePageFeatures() {
  return (
    <section className="bg-zinc-950 py-20 px-6 text-white">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
        Build. Automate. Deploy.
      </h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="bg-zinc-900 p-8 rounded-2xl hover:scale-105 transition transform shadow-lg hover:shadow-purple-500/30 text-center"
          >
            <div className="text-5xl mb-4">{feature.icon}</div>
            <h3 className="text-2xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-zinc-400 text-sm">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
