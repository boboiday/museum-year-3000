import { mkdirSync, writeFileSync } from "node:fs";

const line = "Accession 3000.114 — 'Pine Charm (car mirror).' A real pine tree, ritually shrunk and hung in vehicles so the car would smell of forest. Sacrificed daily; the forest never noticed.";

if ([...line].length < 1 || [...line].length > 200) {
  throw new Error("entry must be 1-200 characters");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
console.log(line);
