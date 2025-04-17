import OpenAI from "openai";
import { onRequest } from "firebase-functions/v2/https";

export const api = onRequest(async (req, res) => {
  // Grab the prompt from the request body
  const { prompt } = req.body;
  if (!prompt) {
    return res.status(400).json({ error: "No prompt provided" });
  }

  // Initialize OpenAI client
  const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
  });

  try {
    // Send a chat completion request
    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [{ role: "user", content: prompt }],
    });

    const text = completion.choices[0].message?.content ?? "";
    return res.json({ text });
  } catch (err: any) {
    console.error("OpenAI error:", err);
    return res.status(500).json({ error: err.message });
  }
});
