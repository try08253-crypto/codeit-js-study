// 1초 대기
// num 출력
// num 곱하기 2출력
// 2초대기
// num + 3 출력
// 1초 대기
// num + 4 출력
// 1초 대기
// num 곱하기 5 출력
async function job2(num) {
  const num = number;
  console.log(num);

  const v2 = await addOneAsync(num, 1000);
  console.log(num * 2);

  const v3 = v2 + 1;
  console.log(num + 3);

  const v4 = await addOneAsync(v3, 1000);
  console.log(num + 4);

  return v4;
}
job2(10);