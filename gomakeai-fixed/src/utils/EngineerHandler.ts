export async function handleWithEngineer(prompt: string) {
  const res = await fetch("https://gomakeai.com/GPT-Engineer/api/code", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ prompt }),
  });

  const data = await res.json();
  return data.output || "GTP Engineer had no code for that prompt.";
}
