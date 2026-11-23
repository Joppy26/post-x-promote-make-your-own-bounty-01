import { copyFileSync, mkdirSync, statSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const repoDir = process.env.MAKEFUN_BOT_DIR ?? dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

mkdirSync(outDir, { recursive: true });
const src = join(repoDir, "POST.json");
const dst = join(outDir, "POST.json");
copyFileSync(src, dst);
if (statSync(dst).size !== statSync(src).size) {
  throw new Error("POST.json copy size mismatch");
}
