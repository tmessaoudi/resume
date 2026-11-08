// Pre-renders the Fresh app into dist/ for Cloudflare static assets. Run after `deno task build`.
import { createHandler } from "$fresh/server.ts";
import { copy, emptyDir, ensureDir } from "$std/fs/mod.ts";
import { dirname, join } from "$std/path/mod.ts";
import manifest from "../fresh.gen.ts";
import config from "../fresh.config.ts";

const OUT = "dist";
const PAGES: Record<string, string> = {
  "/": "index.html",
  "/resume/en": "resume/en.html",
  "/resume/fr": "resume/fr.html",
  "/__export_404__": "404.html",
};

const { build_id } = JSON.parse(await Deno.readTextFile("_fresh/snapshot.json"));

await emptyDir(OUT);
await copy("static", OUT, { overwrite: true });
await copy("_fresh/static", OUT, { overwrite: true });

const jsDir = join(OUT, "_frsh/js", build_id);
await ensureDir(jsDir);
for await (const entry of Deno.readDir("_fresh")) {
  if (entry.isFile && entry.name.endsWith(".js")) {
    await Deno.copyFile(join("_fresh", entry.name), join(jsDir, entry.name));
  }
}

const handler = await createHandler(manifest, config);
const connInfo: Deno.ServeHandlerInfo<Deno.NetAddr> = {
  remoteAddr: { transport: "tcp", hostname: "127.0.0.1", port: 0 },
  completed: Promise.resolve(),
};

for (const [route, file] of Object.entries(PAGES)) {
  const res = await handler(new Request(`http://localhost${route}`), connInfo);
  const expected = file === "404.html" ? 404 : 200;
  if (res.status !== expected) throw new Error(`${route} returned ${res.status}, expected ${expected}`);
  const path = join(OUT, file);
  await ensureDir(dirname(path));
  await Deno.writeTextFile(path, await res.text());
  console.log(`${route} -> ${path}`);
}
