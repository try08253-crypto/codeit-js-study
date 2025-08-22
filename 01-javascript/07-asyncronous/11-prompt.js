import readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const prompt = (askMessage) => {
  return new Promise((resolve, reject) => {
    rl.question(askMessage, (userInput) => {
      resolve(userInput);
      rl.close();
    });
  });
};

const main = async () => {
  const userEmail = await prompt("이메일을 입력하세요: ");
  console.log(userEmail);
}
main();