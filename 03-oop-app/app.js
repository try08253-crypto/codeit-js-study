import { showMemoScreen } from "./ui/memo-screen.js";

export default class App {
  #authScreen;

  constructor(authScreen) {
    this.#authScreen = authScreen;
  }

  run() {
    while (true) {
      const choice = this.#authScreen.openAuthUI();

      if (choice === 1) {
        const me = this.#authScreen.openSignInUI();
        if (me) {
          showMemoScreen(me);
        }
      } else if (choice === 2) {
        this.#authScreen.openSignUpUI();
      } else if (choice === 3) {
        console.log("프로그램을 종료합니다.");
        process.exit(0);
      } else {
        this.#authScreen.openInvalidInputUI();
      }
    }
  }
}