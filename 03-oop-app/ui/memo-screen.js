import { prompt } from "../util.js";
import { createMemo, loadMemos } from "../service/memo-service.js";

export function showMemoScreen(user) {
  while (true) {
    console.log("\n========== Main Screen ==========");
    console.log("[1]. 메모 생성, [2]. 메모 불러오기, [3]. 로그아웃, [4]. 종료");

    const choice = prompt("번호를 선택하세요: ");

    if (choice === "1") {
      createMemo(user.email);
    } else if (choice === "2") {
      const memos = loadMemos(user.email);
      if (memos.length === 0) {
        console.log("저장된 메모가 없습니다.");
      } else {
        console.log("\n=== 나의 메모 ===");
        memos.forEach((m, i) => {
          console.log(`${i + 1}. 제목: ${m.title}`);
          console.log(`   내용: ${m.content}\n`);
        });
      }
    } else if (choice === "3") {
      console.log("로그아웃합니다.");
      return;
    } else if (choice === "4") {
      console.log("프로그램을 종료합니다.");
      process.exit(0);
    } else {
      console.log("잘못된 입력입니다. 다시 선택해주세요.");
    }
  }
}