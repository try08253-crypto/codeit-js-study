import Util from "./util";

export default class App{
  // 속성(변수)(상태)

  // 메소드(함수)(행동)
  run() {
    while (true) {
      let me = null;
      while (me === null) {
        const util = new Util();
          const choiceStr = util.getPrompt("[1]. 로그인, [2]. 회원가입, [3]. 종료: ");
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
    }
  }

}