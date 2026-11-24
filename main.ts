import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The funniest error message a kitchen toaster can show its owner.
// One line, at most 120 characters, in the toaster's own deadpan voice.
const message =
  "ERROR E13: CRUMB TRAY FULL. I AM NOW 60% ARCHIVE OF BREAKFASTS YOU NEVER FINISHED.";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), message, "utf8");
