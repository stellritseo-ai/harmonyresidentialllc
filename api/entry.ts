import server from "../dist/server/server.js";

export const config = {
  runtime: "nodejs",
};

export default async function handler(request: Request) {
  try {
    // Forward the standard request to our TanStack Start server handler
    return await server.fetch(request, {}, {});
  } catch (error) {
    console.error("Vercel Edge Function SSR Error:", error);
    return new Response(
      `<!DOCTYPE html>
      <html>
        <head><title>Server Error</title></head>
        <body style="font-family:system-ui,sans-serif;padding:2rem;text-align:center;">
          <h1>Internal Server Error</h1>
          <p>The server encountered an issue during rendering.</p>
        </body>
      </html>`,
      {
        status: 500,
        headers: { "content-type": "text/html" },
      }
    );
  }
}
