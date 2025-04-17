export async function fetchOpenAIResponse(prompt: string): Promise<string> {
  const res = await fetch("/api", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ prompt }),
  });
  const { text, error } = await res.json();
  if (error) throw new Error(error);
  return text;
}
