// src/lib/openai.ts

/**
 * Streams a chat completion from OpenAI, invoking onToken for each new token.
 */
export async function streamOpenAIResponse(
  prompt: string,
  onToken: (token: string) => void
): Promise<void> {
  const apiKey = import.meta.env.VITE_OPENAI_API_KEY;
  if (!apiKey) throw new Error("Missing VITE_OPENAI_API_KEY");

  const res = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model: "gpt-4",           // or gpt-3.5-turbo
      messages: [{ role: "user", content: prompt }],
      stream: true,
    }),
  });

  if (!res.body) throw new Error("Streaming not supported");

  const reader = res.body.getReader();
  const decoder = new TextDecoder();
  let buffer = "";

  while (true) {
    const { value, done } = await reader.read();
    if (done) break;
    buffer += decoder.decode(value, { stream: true });
    const lines = buffer.split("\n");
    buffer = lines.pop()!; // keep the last partial line

    for (const line of lines) {
      if (!line.startsWith("data: ")) continue;
      const data = line.replace(/^data: /, "");
      if (data === "[DONE]") return;

      try {
        const parsed = JSON.parse(data);
        const token = parsed.choices[0].delta.content;
        if (token) onToken(token);
      } catch (e) {
        console.error("Stream parse error:", e);
      }
    }
  }
}
