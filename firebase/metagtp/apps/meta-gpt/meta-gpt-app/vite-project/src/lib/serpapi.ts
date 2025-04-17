const SERP_KEY = import.meta.env.VITE_SERPAPI_KEY;
export async function fetchSerpApiResults(query: string): Promise<any[]> {
  const res = await fetch(
    `https://serpapi.com/search.json?q=${encodeURIComponent(query)}&api_key=${SERP_KEY}`
  );
  const data = await res.json();
  return data.organic_results || [];
}
