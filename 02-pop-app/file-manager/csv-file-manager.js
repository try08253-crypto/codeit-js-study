import fs from "fs";

export function readCSVFile(filename) {
  const bufferData = fs.readFileSync(filename);
  const strData = String(bufferData);
  return strData.trim().split("\n");
}

export function appendCSVFile(filename, row) {
  fs.appendFileSync(filename, row);
}