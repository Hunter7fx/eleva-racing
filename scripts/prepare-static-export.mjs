import { copyFile, mkdir, readdir } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = path.dirname(fileURLToPath(import.meta.url));
const outputRoot = path.join(projectRoot, "..", "out");

async function ensureRouteIndex(routePath, sourcePath) {
  await mkdir(routePath, { recursive: true });
  await copyFile(sourcePath, path.join(routePath, "index.html"));
}

async function prepareRouteGroup(group) {
  const groupPath = path.join(outputRoot, group);
  const entries = await readdir(groupPath, { withFileTypes: true });

  for (const entry of entries) {
    if (!entry.isFile() || !entry.name.endsWith(".html")) continue;
    const slug = entry.name.slice(0, -5);
    await ensureRouteIndex(path.join(groupPath, slug), path.join(groupPath, entry.name));
  }
}

await ensureRouteIndex(path.join(outputRoot, "contato"), path.join(outputRoot, "contato.html"));

for (const group of ["projetos", "servicos"]) {
  await prepareRouteGroup(group);
}

console.log("Static route indexes prepared for Hostinger.");
