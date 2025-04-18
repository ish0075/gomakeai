import type { NextApiRequest, NextApiResponse } from "next";
import OpenAI from "openai";
import { routeToAgent } from "@/utils/agentRouter";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") return res.status(405).end("Method not allowed");

  const { message } = req.body;
  if (!message) return res.status(400).json({ error: "Missing message" });

  const agent = routeToAgent(message);

  const completion = await openai.chat.completions.create({
    model: agent.model,
    messages: [
      { role: "system", content: agent.systemPrompt },
      { role: "user", content: message },
    ],
    stream: false,
  });

  res.status(200).json({
    agent: agent.name,
    response: completion.choices[0].message.content,
  });
}
