// Node.js의 메인 스레드는
// 논블로킹 상태가 되면
//   (제어권을 libuv의 백그라운드 스레드, 혹은 os에게 넘겼는데)
//   (즉시 제어권을 다시 반환받은 메인 스레드의 상태)
// 비동기적 메커니즘으로 작동할 수 있습니다.
//   (libuv의 백그라운드 스레드, 혹은 os의 작업 완료 유무를 통지받을 것와 무관하게)
//   (메인 스레드가 자신의 코드를 독립적으로 실행할 수 있는 메커니즘)

// 이러한 작업을 비동기 작업(함수)이라고 합니다.

// job1을 실행하면 순서 제어에 실패한다.
// job2를 실행하면 순서 제어에 성공한다.

// 결론1: job2처럼 중첩을 활용하면 비동기 함수의 순서를 제어할 수 있습니다.
// 결론2: 지나친 중첩은 가독성을 방해합니다. 이 문제를 해결하기 위해서 Promise가 등장합니다.

const job1 = (v) => {
  console.log(v);
  setTimeout(() => console.log(v + 1), 1000);
  console.log(v + 2);
  setTimeout(() => console.log(v + 3), 1000);
  console.log(v + 4);
}
// job1(1);

const job2 = (v) => {
  console.log(v);
  setTimeout(() => {
    console.log(v + 1);
    console.log(v + 2);
    setTimeout(() => {
      console.log(v + 3);
      console.log(v + 4);
    }, 1000);
  }, 1000);
}
// job2(1);