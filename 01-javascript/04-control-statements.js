// 조건문
// if (이 부분의 결과가 참이라면) {
//   실행한다
// } else if (아니면 이 부분의 결과가 참이라면) {
//   실행한다
// } else {
//   실행한다
// }
if (users[0].userAge >= 20) {
  console.log(`(성인O)이름: ${users[0].userName}, 나이: ${users[0].userAge}`);
} else {
  console.log(`(성인X)이름: ${users[0].userName}, 나이: ${users[0].userAge}`);
}
if (users[1].userAge >= 20) {
  console.log(`(성인O)이름: ${users[1].userName}, 나이: ${users[1].userAge}`);
} else {
  console.log(`(성인X)이름: ${users[1].userName}, 나이: ${users[1].userAge}`);
}

console.log();

// 반복문
// while (이 부분의 결과가 참이라면) {
//   실행하고 다시 반복한다
// }
// 드디어 끝났다

// 0부터 9까지 출력
let i = 0;
while (i < 10) {
  console.log(i);
  i = i + 1;
}
console.log("드디어 끝");

// 0부터 9까지 출력
let j = 0;
while (true) {
  console.log(j);
  if (j === 9) {
    break;
  }
  j = j + 1;
}
console.log("드디어 끝");

// 0부터 9까지 출력
for (let i = 0; i < 10; i = i + 1) {
  console.log(i);
}
console.log("드디어 끝");

// 0부터 9까지 5를 제외하고 출력
let k = 0;
while (k < 10) {
  if (k === 5) {
    k = k + 1;
    continue;
  }
  console.log(k);
  k = k + 1;
}
console.log("드디어 끝");