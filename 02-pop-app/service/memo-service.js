import { prompt } from "../util.js";
import {
  appendCSVFile,
  readCSVFile,
} from "../file-manager/csv-file-manager.js";

export function createMemo(email) {
  const inputTitle = prompt("제목을 입력해주세요: ");
  const inputContent = prompt("내용을 입력해주세요: ");
  appendCSVFile("./data/memos.csv", `${inputTitle},${inputContent},${email}\n`);
}

export function loadMemos(email) {
  const memos = [];

  const parsedContent = readCSVFile("./data/memos.csv");
  for (let i = 0; i < parsedContent.length; i = i + 1) {
    const [storedTitle, storedContent, storedEmail] =
      parsedContent[i].split(",");
    if (email === storedEmail) {
      const newMemo = {
        title: storedTitle,
        content: storedContent,
      };
      memos.push(newMemo);
    }
  }

  return memos;
}