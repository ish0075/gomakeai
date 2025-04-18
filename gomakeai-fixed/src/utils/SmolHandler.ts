export async function handleWithSmol(prompt: string) {
  const res = await fetch("https://smol.gomakeai.com/api/dev", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ prompt }),
  });

  const data = await res.json();
  return data.output || "Smol Developer had no response.";
}
