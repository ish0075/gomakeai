import React from "react";

const pricingTiers = [
  {
    title: "Freemium Plan",
    price: "$0/mo",
    description: "Explore with limited access to 1 bot, no credit card required.",
    features: ["1 Agent (Limited Features)", "Community Support", "Basic Access Only"],
    cta: "Try for Free",
    tier: "freemium",
  },
  {
    title: "Solo Agent Plan",
    price: "$5/mo per bot",
    description: "Flexible plan for individuals who want one or more bots.",
    features: ["Add Multiple Solo Bots", "Full Features", "Email Support"],
    cta: "Add Your Bot",
    tier: "solo",
  },
  {
    title: "Specialty Team Plan",
    price: "$20/mo",
    description: "Bundle any 5 bots from a specialty team.",
    features: ["Up to 5 Team Bots", "Priority Support", "Team Integrations"],
    cta: "Pick a Team",
    tier: "team",
  },
  {
    title: "Growth Stack",
    price: "$49/mo",
    description: "Ideal for startups needing a mix of marketing, dev, and customer success bots.",
    features: ["Up to 10 Bots", "Slack/Discord Support", "Basic Automation Hub"],
    cta: "Launch Growth Stack",
    tier: "growth",
  },
  {
    title: "Custom Enterprise Suite",
    price: "Let's Talk",
    description: "Tailored bot infrastructure, custom workflows, white-label access.",
    features: ["Unlimited Bots", "Dedicated Account Manager", "AI Workflow Engineering", "White Label Options"],
    cta: "Schedule a Demo",
    tier: "enterprise",
  }
];

const testimonials = [
  {
    name: "Amanda R.",
    quote: "These bots saved me hours every week. My marketing team runs smoother than ever.",
    role: "Marketing Manager, Boldify"
  },
  {
    name: "David P.",
    quote: "Songify created a custom track for my YouTube channel that blew up my audience!",
    role: "Creator & Coach"
  },
  {
    name: "Samantha G.",
    quote: "I closed 2 real estate deals from leads my Follow-Up Bot nurtured while I was offline.",
    role: "Broker, Vision Realty"
  }
];

export default function HomePagePricing() {
  return (
    <section className="bg-black text-white py-24 px-6 space-y-24">
      <div>
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
      </div>

      <div className="max-w-5xl mx-auto text-center">
        <h3 className="text-3xl font-bold mb-8">What Our Users Are Saying</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div key={t.name} className="bg-zinc-800 p-6 rounded-xl shadow text-left">
              <p className="italic text-zinc-300 mb-4\">“{t.quote}”</p>
              <p className="text-purple-400 font-bold">{t.name}</p>
              <p className="text-xs text-zinc-500">{t.role}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="text-center max-w-xl mx-auto space-y-4">
        <h3 className="text-3xl font-bold">Earn Bots by Referring Friends</h3>
        <p className="text-zinc-400">
          Invite your network and get credits to unlock bots for free. Top referrers get affiliate payouts too.
        </p>
        <button className="bg-purple-700 hover:bg-purple-800 text-white px-6 py-3 rounded-lg font-semibold transition">
          Join the Affiliate Program
        </button>
      </div>
    </section>
  );
}
