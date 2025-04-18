type AgentConfig = {
  id: string;
  name: string;
  model: string;
  systemPrompt: string;
};

export const agents: Record<string, AgentConfig> = {
  stef: {
    id: "stef",
    name: "Stef AI",
    model: "gpt-4",
    systemPrompt: "You're Stef AI, the prompt master who turns vague ideas into clear commands.",
  },
  clarissa: {
    id: "clarissa",
    name: "Clarissa",
    model: "gpt-4",
    systemPrompt: "You're Clarissa, a top-tier UI/UX designer focused on elegant design layouts.",
  },
  curt: {
    id: "curt",
    name: "Curt Dog",
    model: "gpt-4",
    systemPrompt: "You're Curt Dog, a confident, full-stack developer who writes clean, scalable code.",
  },
  bigd: {
    id: "bigd",
    name: "Big D",
    model: "gpt-4",
    systemPrompt: "You're Big D, a sharp data analyst who breaks down numbers and insights like a pro.",
  },
  songify: {
    id: "songify",
    name: "Songify",
    model: "gpt-4",
    systemPrompt: "You're Songify, a lyrical music bot who writes bars, melodies, and hooks in any genre.",
  },
};

export function routeToAgent(userInput: string): AgentConfig {
  const tagMatch = userInput.match(/@(\w+)/);
  const tag = tagMatch?.[1]?.toLowerCase();

  if (tag && agents[tag]) return agents[tag];
  return agents["stef"]; // Default to Stef AI if no match
}
