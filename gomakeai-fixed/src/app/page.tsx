// src/app/page.tsx
import React from "react";
import HomePageHero from "@/components/HomePageHero";
import HomePageAgents from "@/components/HomePageAgents";
import HomePageFeatures from "@/components/HomePageFeatures";
import HomePageSpecialtyTeams from "@/components/HomePageSpecialtyTeams";
import HomePagePricing from "@/components/HomePagePricing";

export default function Home() {
  return (
    <main className="bg-black text-white">
      <HomePageHero />
      <HomePageAgents />
      <HomePageFeatures />
      <HomePageSpecialtyTeams />
      <HomePagePricing />
    </main>
  );
}
