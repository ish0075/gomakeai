const SERP_API_KEY = import.meta.env.VITE_SERP_API_KEY;

export async function searchWithSerpApi(query: string) {
  const response = await fetch(
    `https://serpapi.com/search.json?q=${encodeURIComponent(query)}&api_key=${SERP_API_KEY}`
  );

  const data = await response.json();
  return data?.organic_results || [];
}
