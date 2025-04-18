import React from "react";

const pricingTiers = [
  {
    title: "Solo Agent",
    price: "$29/mo",
    description: "Pick 1 agent for your workflow.",
    features: ["1 Agent Included", "Email Support", "Monthly Updates"],
    cta: "Start with 1 Bot",
    tier: "basic",
  },
  {
    title: "Specialty Team",
    price: "$99/mo",
    description: "Choose from a complete team like Real Estate or Dev Squad.",
    features: ["Up to 5 Agents", "Priority Support", "Team Integrations"],
    cta: "Choose a Team",
    tier: "pro",
  },
  {
    title: "Custom Suite",
    price: "Let's Talk",
    description: "Build a fully customized bot suite tailored to your company.",
    features: [
      "Unlimited Agents",
      "Dedicated Support",
      "Custom Integrations",
      "Private Branding",
    ],
    cta: "Book a Call",
    tier: "enterprise",
  }
];

export default function HomePagePricing() {
  return (
    <section className="bg-black text-white py-24 px-6">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
        Flexible Pricing for Every Vision
      </h2>

      <div className="grid gap-10 grid-cols-1 md:grid-cols-3 max-w-7xl mx-auto">
        {pricingTiers.map((tier) => (
          <div
            key={tier.tier}
            className={`rounded-xl p-8 border shadow-lg bg-zinc-900 border-zinc-700 hover:shadow-purple-500/20 transition flex flex-col justify-between`}
          >
            <div>
              <h3 className="text-2xl font-semibold mb-2">{tier.title}</h3>
              <p className="text-zinc-400 text-sm mb-4">{tier.description}</p>
              <p className="text-4xl font-bold text-purple-400 mb-6">{tier.price}</p>
              <ul className="space-y-2 text-sm">
                {tier.features.map((feature) => (
                  <li key={feature} className="text-zinc-300">
                    • {feature}
                  </li>
                ))}
              </ul>
            </div>
            <button className="mt-8 w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 rounded-lg transition">
              {tier.cta}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
