async function handler(req, res) {
  try {
    const server = await import("../dist/web-client-angular/server/server.mjs");
    const app = server.app();
    // ... rest of your logic
  } catch (error) {
    console.error("Error loading server module:", error);
    res.status(500).send("Internal Server Error");
  }
}

export default handler;
