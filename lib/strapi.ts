// lib/strapi.ts
export async function fetchFromStrapi(path: string) {
  const API_URL = process.env.NEXT_API_URL || process.env.NEXT_STRAPI_URL;
  
  if (!API_URL) {
    throw new Error("NEXT_API_URL environment variable is not set. Please set NEXT_STRAPI_URL or NEXT_API_URL.");
  }
  
  const url = `${API_URL}${path}`;

  const res = await fetch(url, {
    headers: {
      "Content-Type": "application/json",
    },
    cache: "no-store", // always fresh data (good for CMS)
  });

  if (!res.ok) {
    console.error("Strapi fetch error:", res.status, res.statusText);
    throw new Error(`Failed to fetch: ${url}`);
  }

  return res.json();
}
