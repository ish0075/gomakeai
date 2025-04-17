import { onRequest } from "firebase-functions/v2/https";
import * as logger from "firebase-functions/logger";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export const api = onRequest(async (request, response) => {
  logger.info("Request received", { structuredData: true });
  
  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: "Hello!" }],
    });

    response.send(completion.choices[0]?.message?.content || "No response");
  } catch (error) {
    logger.error("Error:", error);
    response.status(500).send("Error processing request");
  }
});
