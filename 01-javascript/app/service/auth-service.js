import { readFile } from "../file-manager.js";
import { prompt } from "../util.js";

export function signIn() {
  let me = null;

  const inputEmail = prompt("이메일을 입력해주세요: ");
  const inputPassword = prompt("비밀번호를 입력해주세요: ");

  const parsedContent = readFile("users.csv");
  for (let i = 0; i < parsedContent.length; i = i + 1) {
    const [storedEmail, storedPassword, storedNickname] =
      parsedContent[i].split(",");
    if (inputEmail === storedEmail && inputPassword === storedPassword) {
      console.log("로그인에 성공했어요!");
      me = {
        email: storedEmail,
        nickname: storedNickname,
      };
      break;
    }
  }

  return me;
}

export function signUp() {
  const inputEmail = prompt("이메일을 입력해주세요: ");
  const inputPassword = prompt("비밀번호를 입력해주세요: ");
  const inputNickname = prompt("닉네임을 입력해주세요: ");

  const parsedContent = readFile("users.csv");

  let isEmailDuplicated = false;
  for (let i = 0; i < parsedContent.length; i = i + 1) {
    const storeEmail = parsedContent[i].split(",")[0];
    if (inputEmail === storeEmail) {
      isEmailDuplicated = true;
      console.log("이미 존재하는 계정입니다");
      break;
    }
  }

  if (isEmailDuplicated === false) {
    fs.appendFileSync(
      "users.csv",
      `${inputEmail},${inputPassword},${inputNickname}\n`,
    );
  }
}