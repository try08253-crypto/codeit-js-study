// 함수
function addOne(x) {
  return x + 1;
}
// 익명 함수
const addTwo = function (x) {
  return x + 2;
};
// 익명 함수 중에서 화살표 함수
const addThree = (x) => {
  return x + 3;
};
// 화살표 함수의 줄여쓰기
const addFour = (x) => x + 4;

// 함수의 실행
const y1 = addOne(1);
console.log(y1);
const y2 = addTwo(1);
console.log(y2);
const y3 = addThree(1);
console.log(y3);