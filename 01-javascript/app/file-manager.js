import fs from "fs";

export function readFile(filename) {
  const readContent = fs.readFileSync(filename);
  const content = String(readContent);
  const parsedContent = content.trim().split("\n");
  return parsedContent;
}