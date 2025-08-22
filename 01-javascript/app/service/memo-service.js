import fs from "fs";
import { readFile } from "../file-manager.js";
import { prompt } from "../util.js";

export function createMemo(email) {
  const inputTitle = prompt("제목을 입력해주세요: ");
  const inputContent = prompt("내용을 입력해주세요: ");
  fs.appendFileSync(
    "memos.csv",
    `${inputTitle},${inputContent},${email}\n`,
  );
}

export function loadMemos(email) {
  const memos = [];

  const parsedContent = readFile("memos.csv");
  for (let i = 0; i < parsedContent.length; i = i + 1) {
    const [storedTitle, storedContent, storedEmail] = parsedContent[i].split(",");
    if (email === storedEmail) {
      const newMemo = {
        title: storedTitle,
        content: storedContent
      }
      memos.push(newMemo);
    }
  }

  return memos;
}