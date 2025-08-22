// 프로미스의 then 메소드
// 1. then 메소드는 매개변수로 주입받은 콜백 함수의 리턴값을 자신의 내부 값으로 가지는 새로운 프로미스를 리턴한다.
// 2. 리턴값이 프로미스인 경우, 그 프로미스를 그대로 리턴한다.
// 3. 이러한 특성으로 인해서 중첩 문제가 해결된다.

// 프로미스는 미래에 결정될 예정인 값을 담은 컨테이너입니다.
// 대기중, 완료, 에러 3가지 상태를 가질 수 있습니다.
// 프로미스 컨테이너 내부의 값을 지금 즉시 1로 결정해봅시다.
// 내부의 값 1에 2를 곱해서 출력해봅시다.
// 그 결과를 받아서, 3을 더해서 출력해봅시다.
const p1 = new Promise((resolve, reject) => { resolve(1) });
console.log(p1);
p1
  .then((v) => {
    console.log(v * 2);
    return v * 2;
  })
  .then((v) => {
    console.log(v + 3)
  })
  .catch((err) => {
    console.error(err);
  })



// 프로미스는 미래에 결정될 예정인 값을 담은 컨테이너입니다.
// 대기중, 완료, 에러 3가지 상태를 가질 수 있습니다.
// 프로미스 컨테이너 내부의 값을 1초 뒤에 10으로 결정해봅시다.
// 내부의 값 10에 2를 곱해서 출력해봅시다.
// 1초 후에 내부의 값 20에 30을 더해서 출력해봅시다.
const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(10);
  }, 1000);
});
p2
  .then((v) => {
    console.log(v * 2);
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(v * 2);
      }, 1000);
    });
  })
  .then(v => {
    console.log(v + 30);
  })
  .catch(err => {
    console.error(err);
  })