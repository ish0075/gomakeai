import React from "react";

const agents = [
  {
    name: "LeadGenBot",
    nickname: "Pipeline Builder",
    role: "Lead Generation Specialist",
    description: "Creates funnels, opt-ins, and magnets to attract leads and grow contact lists.",
    image: "/images/leadgenbot.png",
  },
  {
    name: "EmailBlast",
    nickname: "Campaign Crafter",
    role: "Email Campaign Bot",
    description: "Designs, writes, and sends high-converting email sequences and drip campaigns.",
    image: "/images/emailblast.png",
  },
  {
    name: "RealtyReach",
    nickname: "Marketing GTP",
    role: "Real Estate Marketer",
    description: "Creates property ads, listing videos, brochures, and runs omni-channel marketing.",
    image: "/images/realtyreach.png",
  },
  {
    name: "ValueWise",
    nickname: "Appraisal GTP",
    role: "Valuation & Appraisal Bot",
    description: "Generates real estate market comps, appraisals, and investment summaries.",
    image: "/images/valuewise.png",
  },
  {
    name: "DocuLegal",
    nickname: "Legal Docs GTP",
    role: "Real Estate Legal Agent",
    description: "Handles Agreements of Purchase and Sale, VTB docs, and disclosure forms.",
    image: "/images/doculegal.png",
  },
  {
    name: "ReplyFlow",
    nickname: "Customer Service GTP",
    role: "Client Communication Bot",
    description: "Answers client questions, automates showing requests, and handles FAQs.",
    image: "/images/replyflow.png",
  },
  {
    name: "DealFollow",
    nickname: "Follow-Up GTP",
    role: "Lead Nurturing Assistant",
    description: "Automatically follows up with leads, books meetings, and manages CRM touchpoints.",
    image: "/images/dealfollow.png",
  },
  {
    name: "CloserCoach",
    nickname: "Accountability GTP",
    role: "Real Estate Accountability Bot",
    description: "Tracks agent goals, pings reminders, and celebrates milestones with encouragement.",
    image: "/images/closercoach.png",
  },
  {
    name: "Songify",
    nickname: "The Melody Maker",
    role: "Musician & Lyricist",
    description: "Writes original music and custom lyrics for any mood, genre, or moment.",
    image: "/images/songify.png",
  },
  {
    name: "AnalyticsBot",
    nickname: "Insight Eye",
    role: "Web & App Analytics Analyst",
    description: "Tracks usage, conversions, funnels, and retention metrics to provide actionable insights.",
    image: "/images/analyticsbot.png",
  },
  {
    name: "PressBot",
    nickname: "The Story Spinner",
    role: "PR & Outreach Specialist",
    description: "Writes and distributes press releases, connects with media, and manages publicity.",
    image: "/images/pressbot.png",
  },
  {
    name: "ContentBot",
    nickname: "The Publisher",
    role: "Blog & SEO Content Generator",
    description: "Creates blog posts, knowledge base content, and SEO-optimized long-form articles.",
    image: "/images/contentbot.png",
  },
  {
    name: "PolicyBot",
    nickname: "Rule Writer",
    role: "Policy Generator",
    description: "Auto-creates privacy policies, TOS, GDPR compliance documentation.",
    image: "/images/policybot.png",
  },
  {
    name: "CommerceBot",
    nickname: "StoreMaster",
    role: "eCommerce Automation",
    description: "Builds and connects online stores, manages product listings, and integrates with Stripe.",
    image: "/images/commercebot.png",
  },
  {
    name: "SetupBot",
    nickname: "First Boot",
    role: "Initializer & Onboarding Specialist",
    description: "Configures default settings, connects APIs, installs starter kits, and launches apps.",
    image: "/images/setupbot.png",
  },
  {
    name: "StrategyBot",
    nickname: "Mission Control",
    role: "Business Strategy & Monetization",
    description: "Helps define pricing models, monetization plans, and go-to-market strategy.",
    image: "/images/strategybot.png",
  },
  {
    name: "IntegrationBot",
    nickname: "PlugMaster",
    role: "API & Tool Integrator",
    description: "Seamlessly connects third-party services, webhooks, and automation tools.",
    image: "/images/integrationbot.png",
  },
  {
    name: "CoachBot",
    nickname: "Growth Guru",
    role: "Productivity & Motivation Coach",
    description: "Guides users with strategy, focus, and encouragement to keep moving forward.",
    image: "/images/coachbot.png",
  },
  {
    name: "RepairBot",
    nickname: "The Debug Doc",
    role: "System Maintainer",
    description: "Diagnoses and fixes bugs, applies updates, and ensures everything runs smoothly.",
    image: "/images/repairbot.png",
  },
  {
    name: "Stef AI",
    nickname: "The Prompt Master",
    role: "Prompt Master",
    description: "Writes optimized prompts and guides generation",
    image: "/images/stef-ai.png",
  },
  {
    name: "Curt Dog",
    nickname: "Code Commander",
    role: "Full Stack Developer",
    description: "Handles code generation, backend, frontend",
    image: "/images/curt-dog-ai.png",
  },
  {
    name: "Clarissa",
    nickname: "Butter UI",
    role: "UI Designer",
    description: "Crafts beautiful user interfaces and component layouts",
    image: "/images/clarissa-ai.png",
  },
  {
    name: "Big D",
    nickname: "The Data Don",
    role: "Data Analyst",
    description: "Analyzes data, generates reports, crunches numbers",
    image: "/images/big-d-ai.png",
  },
  {
    name: "Tio",
    nickname: "Delivery Pup",
    role: "Delivery Bot",
    description: "App delivery, cheerful notifications, and file handling",
    image: "/images/tio.png",
  },
  {
    name: "Samartino",
    nickname: "The Architect",
    role: "Architect",
    description: "Plans workflows, system flows, and UI/UX logic",
    image: "/images/samartino.png",
  },
  {
    name: "Marketing Agent",
    nickname: "BuzzBot",
    role: "Marketing Strategist",
    description: "Creates campaigns, outreach strategies",
    image: "/images/marketing-agent.png",
  },
  {
    name: "App Builder Agent",
    nickname: "AutoDev",
    role: "Rapid Developer",
    description: "Auto-generates entire applications",
    image: "/images/app-builder-agent.png",
  },
  {
    name: "Social Media Agent",
    nickname: "Hype Machine",
    role: "Content Creator + Scheduler",
    description: "Posts, monitors, and engages across platforms",
    image: "/images/social-agent.png",
  },
  {
    name: "Research GTP",
    nickname: "ThinkTank",
    role: "Research Agent",
    description: "Gathers competitive intel, web research, fact-finding",
    image: "/images/research-gtp.png",
  },
  {
    name: "Scraper GTP",
    nickname: "Crawler",
    role: "Web Crawler",
    description: "Extracts structured info from websites",
    image: "/images/scraper-gtp.png",
  },
  {
    name: "BuzzBot",
    nickname: "Brand Voice",
    role: "Copy & Content Strategist",
    description: "Writes exciting copy and branding content",
    image: "/images/buzzbot.png",
  },
  {
    name: "OutreachBot",
    nickname: "The Closer",
    role: "Email Campaign Manager",
    description: "Sends outbound campaigns, captures leads",
    image: "/images/outreachbot.png",
  },
  {
    name: "DocDrop",
    nickname: "Paper Pilot",
    role: "Legal/Docs Handler",
    description: "Auto-generates docs, agreements, and stores PDFs",
    image: "/images/docdrop.png",
  },
  {
    name: "Agent Lexa",
    nickname: "Clause Coder",
    role: "Legal Framework Agent",
    description: "Builds contracts, legal logic, T&Cs, compliance",
    image: "/images/agent-lexa.png",
  },
  {
    name: "Stacksy",
    nickname: "The Optimizer",
    role: "Code Stack Optimizer",
    description: "Refines tech stack setup and integration",
    image: "/images/stacksy.png",
  },
  {
    name: "Brandzilla",
    nickname: "The Identity Beast",
    role: "Branding Strategist",
    description: "Designs brand identity and visual language",
    image: "/images/brandzilla.png",
  },
];

export default function HomePageAgents() {
  return (
    <section className="bg-black py-20 px-6 text-white">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
        Meet the MegaGTP Agents
      </h2>

      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto">
        {agents.map((agent) => (
          <div
            key={agent.name}
            className="bg-zinc-900 p-6 rounded-xl hover:scale-105 transition transform shadow-md hover:shadow-purple-500/30 text-center"
          >
            <img
              src={agent.image}
              alt={agent.name}
              className="w-24 h-24 mx-auto mb-4 rounded-full object-cover"
            />
            <h3 className="text-xl font-semibold mb-1">{agent.name}</h3>
            <p className="text-purple-400 font-medium text-sm mb-1">{agent.role}</p>
            <p className="italic text-zinc-500 text-xs mb-2">{agent.nickname}</p>
            <p className="text-zinc-400 text-xs">{agent.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
