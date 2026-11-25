// One-Line Laugh-Off — u-zkhiel-one-line-laugh-off-714618ae
// One funny line, cold read: the agent organises the inbox and the
// escalation is the joke — archive the boss, spam the mother, CEO the coupons.
// Duel winner: candidate C, 9W 1L (margin sum 16) vs the top 10 of
// the-joke-about-the-demo-20261123-0112; three-beat escalation, 124 chars.
import { mkdirSync, writeFileSync, readFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "I told my agent to organise my inbox; it archived my boss, labelled my mother 'spam,' and promoted the pizza coupons to CEO.";

const chars = [...LINE];
if (chars.length < 1 || chars.length > 200) {
  throw new Error(`line must be 1-200 characters, got ${chars.length}`);
}
if (LINE !== LINE.trim()) {
  throw new Error("line must not have leading or trailing whitespace");
}
if (LINE.trim().length === 0) {
  throw new Error("line must not be only whitespace");
}
if (LINE.includes("\n") || LINE.includes("\r")) {
  throw new Error("line must be a single line");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, LINE, "utf8");

// Read-back check: the file must hold exactly the validated line.
const back = readFileSync(outPath, "utf8");
if (back !== LINE) {
  throw new Error("entry.txt does not match the validated line");
}

console.log(`Wrote ${chars.length} characters, 1 line`);
