import { signIn, signUp } from "./service/auth-service.js";
import { createMemo, loadMemos } from "./service/memo-service.js";
import { prompt } from "./util.js";

while (true) {
  let me = null;

  while (me === null) {
    const choiceStr = prompt("[1]. 로그인, [2]. 회원가입, [3]. 종료: ");
    const choice = Number(choiceStr);
    if (choice === 1) {
      me = signIn();
      if (me === null) {
        console.log("일치하는 이메일 또는 비밀번호가 없습니다.");
      }
    } else if (choice === 2) {
      signUp();
    } else if (choice === 3) {
      console.log("프로그램을 종료합니다.");
      process.exit(0);
    } else {
      console.log("입력이 잘못되었습니다.");
    }
  }

  console.log(`${me.nickname}님 안녕하세요.`);
  while (true) {
    const choiceStr = prompt(
      "[1]. 메모 작성하기, [2]. 메모 불러오기, [3]. 로그아웃: , [4]. 종료: ",
    );
    const choice = Number(choiceStr);

    if (choice === 1) {
      createMemo(me.email);
    } else if (choice === 2) {
      const memos = loadMemos(me.email);
      for (let i = 0; i < memos.length; i = i + 1) {
        console.log(`제목: ${memos[i].title}, 컨텐츠: ${memos[i].content}`);
      }
    } else if (choice === 3) {
      me = null;
      break;
    } else if (choice === 4) {
      process.exit(0);
    } else {
      console.log("입력이 잘못되었습니다.");
    }
  }
}