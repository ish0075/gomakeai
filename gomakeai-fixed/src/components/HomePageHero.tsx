import React from "react";
import RotatingAgentCard from "./RotatingAgentCard";

export default function HomePageHero() {
  return (
    <div className="bg-gradient-to-br from-black via-zinc-900 to-purple-900 min-h-screen flex flex-col md:flex-row items-center justify-between px-8 py-16">
      {/* Left side: Text */}
      <div className="max-w-xl text-left text-white space-y-6">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Bring Your Ideas to Life with <br /> AI-Powered Tools
        </h1>
        <p className="text-lg md:text-xl text-zinc-300">
          The fastest way to build, deploy, and automate smart apps and websites —
          powered by your own <span className="text-purple-400 font-semibold">MegaGTP agents</span>.
        </p>
        <div className="flex gap-4">
          <button className="bg-purple-600 hover:bg-purple-700 text-white font-medium px-6 py-3 rounded-xl transition">
            Get Started
          </button>
          <button className="border border-purple-500 hover:bg-purple-800 text-white font-medium px-6 py-3 rounded-xl transition">
            See it in action
          </button>
        </div>
      </div>

      {/* Right side: Rotating Agent Card */}
      <div className="mt-12 md:mt-0 md:ml-8">
        <RotatingAgentCard />
      </div>
    </div>
  );
}
