import path from "path";

async function handler(req, res) {
  try {
    // Construct the path aligning with Vercel's recommendation:
    const serverModulePath = path.join(
      process.cwd(),
      "dist",
      "web-client-angular",
      "server",
      "server.mjs"
    );

    // Ensure path resolution before import:
    if (!fs.existsSync(serverModulePath)) {
      throw new Error(`File not found: ${serverModulePath}`);
    }

    const server = await import(serverModulePath);

    server.app();
  } catch (error) {
    console.error("Error loading server module:", error);
    res.status(500).send("Internal Server Error");
  }
}

console.log(process.cwd()); // For debugging
export default handler;
