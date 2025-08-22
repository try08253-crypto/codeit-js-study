import { prompt } from "../util.js";
import CSVFileManager from "../file-manager/csv-file-manager.js";

const csvManager = new CSVFileManager();

export function createMemo(email) {
  const title = prompt("제목을 입력해주세요: ").trim();
  const content = prompt("내용을 입력해주세요: ").trim();

  if (!title || !content) {
    console.log("제목과 내용을 반드시 입력해야 합니다.");
    return;
  }

  csvManager.write("./data/memos.csv", `${title},${content},${email}`);
  console.log("메모가 저장되었습니다.\n");
}

export function loadMemos(userEmail) {
  const memos = [];
  const fileData = csvManager.read("./data/memos.csv");

  for (const row of fileData) {
    if (row.length !== 3) continue;

    const [title, content, email] = row;
    if (!title || !content || !email) continue;

    if (email === userEmail) {
      memos.push({ title, content });
    }
  }

  return memos;
}