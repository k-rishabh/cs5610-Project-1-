import { createServer } from "node:http";
import { readFile } from "node:fs/promises";
import { dirname, extname, resolve, sep } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const port = Number(process.env.PORT || 8080);
const types = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".md": "text/plain; charset=utf-8",
  ".pptx":
    "application/vnd.openxmlformats-officedocument.presentationml.presentation",
};

const server = createServer(async (request, response) => {
  try {
    const pathname = decodeURIComponent(
      new URL(request.url, "http://localhost").pathname,
    );
    const file = resolve(
      root,
      `.${pathname === "/" ? "/index.html" : pathname}`,
    );
    if (!file.startsWith(root + sep)) {
      response.writeHead(403);
      response.end("Forbidden");
      return;
    }
    const data = await readFile(file);
    response.writeHead(200, {
      "Content-Type": types[extname(file)] || "application/octet-stream",
    });
    response.end(data);
  } catch {
    response.writeHead(404);
    response.end("Not found");
  }
});

server.on("error", (error) => {
  console.error(`Unable to start the local server: ${error.message}`);
  process.exitCode = 1;
});
server.listen(port, "127.0.0.1", () => {
  console.log(`Personal homepage: http://localhost:${port}`);
});
