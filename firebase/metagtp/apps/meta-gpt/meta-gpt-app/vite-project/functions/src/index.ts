import * as functions from "firebase-functions";
import OpenAI from "openai";

// Fetch your key from Functions config:
const apiKey = functions.config().openai?.key;
if (!apiKey) {
  throw new Error("Missing OpenAI API key in functions config");
}

const openai = new OpenAI({ apiKey });

export const api = functions.https.onRequest(async (req, res) => {
  const prompt = (req.body.prompt as string) || "";
  if (!prompt) {
    return res.status(400).json({ error: "No prompt provided" });
  }

  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: prompt }],
    });
    const text = completion.choices?.[0]?.message?.content ?? "";
    return res.json({ text });
  } catch (err: any) {
    console.error("OpenAI error:", err);
    return res.status(500).json({ error: err.message || String(err) });
  }
});
