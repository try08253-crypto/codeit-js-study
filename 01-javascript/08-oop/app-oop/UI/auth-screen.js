export default class AuthScreen{
  showSelectMenu() {
    const prompt = Util.getPrompt();
    const choiceStr = prompt("[1].로그인, [2].회원가입, [3].종료");
    const choice = Number(choiceStr);
    return choice;
  }
  
}