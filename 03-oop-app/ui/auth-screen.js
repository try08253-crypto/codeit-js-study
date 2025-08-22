import promptSync from "prompt-sync";

export default class AuthScreen {
  // 속성
  #prompt;
  #authService;

  constructor(authService) {
    this.#prompt = promptSync();
    this.#authService = authService;
  }
  // 메소드
  openAuthUI() {
    console.log("========== Auth Screen ==========");
    return Number(this.#prompt("[1]. 로그인, [2]. 회원가입, [3]. 종료: "));
  }
  openSignInUI() {
    const inputEmail = this.#prompt("이메일을 입력하세요: ");
    const inputPassword = this.#prompt("비밀번호를 입력하세요: ");
    if (!inputEmail.includes("@")) {
      console.log("\t유효하지 않은 이메일입니다.");
      return null;
    }
    if (inputPassword.length < 4) {
      console.log("\t비밀번호는 4자리 이상 입력해주세요");
      return null;
    }

    const me = this.#authService.signIn(inputEmail, inputPassword);
    if (!me) {
      console.log("\t이메일 또는 비밀번호가 일치하지 않습니다.");
    } else {
      console.log(`\n==================================================`);
      console.log(`안녕하세요 ${me.nickname}님! 다시 보게 되어서 반가워요.`);
      console.log(`==================================================\n`);
    }

    return me;
  }
  openSignUpUI() {
    const inputEmail = this.#prompt("\t이메일을 입력하세요: ");
    const inputPassword = this.#prompt("\t비밀번호를 입력하세요: ");
    const inputNickname = this.#prompt("\t닉네임을 입력하세요: ");
    if (!inputEmail.includes("@")) {
      console.log("\t유효하지 않은 이메일입니다.");
      return false;
    }
    if (inputPassword.length < 4) {
      console.log("\t비밀번호는 4자리 이상 입력해주세요");
      return false;
    }
    if (inputNickname.length >= 10) {
      console.log("\t닉네임은 9자리 이하로 입력해주세요");
      return false;
    }

    const isSignUpSuccess = this.#authService.signUp(
      inputEmail,
      inputPassword,
      inputNickname,
    );
    if (!isSignUpSuccess) {
      console.log("\t중복된 계정입니다.");
    } else {
      console.log("\t회원가입에 성공했어요.");
    }

    return isSignUpSuccess;
  }
  openInvalidInputUI() {
    console.log("\t입력이 잘못되었습니다.");
  }
}