import path from "path"; // Use import for ES modules
async function handler(req, res) {
  try {
    // Construct the path using process.cwd()
    const serverModulePath = path.join(
      process.cwd(),
      "../dist/web-client-angular/server/server.mjs"
    );

    // Import using the constructed path
    const server = await import(serverModulePath);

    server.app();
  } catch (error) {
    console.error("Error loading server module:", error);
    res.status(500).send("Internal Server Error");
  }
}

console.log(process.cwd()); // For debugging purposes
export default handler;
