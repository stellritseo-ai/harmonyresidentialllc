// @ts-nocheck
import server from "../dist/server/server.js";

export const config = {
  runtime: "nodejs",
};

export default async function handler(request) {
  try {
    const url = new URL(request.url);
    console.log("Original Vercel request URL:", request.url);
    
    // Vercel routes all rewrites to /api/entry, but passes the original path in x-matched-path
    const matchedPath = request.headers.get("x-matched-path");
    console.log("Matched Path Header:", matchedPath);
    
    if (matchedPath) {
      // If x-matched-path is set, rewrite the pathname back to the original requested path
      url.pathname = matchedPath;
      console.log("Corrected URL for TanStack Router:", url.toString());
    }

    // Create a new request object with the corrected URL
    const correctedRequest = new Request(url.toString(), request);

    return await server.fetch(correctedRequest, {}, {});
  } catch (error) {
    console.error("Vercel Function SSR Error:", error);
    return new Response(
      `<!DOCTYPE html>
      <html>
        <head><title>Server Error</title></head>
        <body style="font-family:system-ui,sans-serif;padding:2rem;text-align:center;">
          <h1>Internal Server Error</h1>
          <p>The server encountered an issue during rendering.</p>
          <pre style="text-align:left;max-width:600px;margin:2rem auto;padding:1rem;background:#f4f4f4;border-radius:4px;">${error.stack || error}</pre>
        </body>
      </html>`,
      {
        status: 500,
        headers: { "content-type": "text/html" },
      }
    );
  }
}
