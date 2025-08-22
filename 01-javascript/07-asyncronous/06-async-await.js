// 05-promise-then-3.js 파일의 job을 async, awiat를 사용해서 구현해보세요.
// const 프로미스 내부 값 = await 프로미스
const delayAddOne = (v) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(v + 1);
    }, 1000)
  });
}
const job = async (v) => {
  console.log(v);
  const v2 = await delayAddOne(v);
  console.log(v2);
  console.log(v2 + 1);
  const v4 = await delayAddOne(v2 + 1);
  console.log(v4);
  console.log(v4 + 1);
}
// job(1);

// 결론
// 비동기 + 논블로킹 방식이 어떤 경우에 좋은걸까?
const makeFoodInTheCPU = (customerId) => {
  console.log(`${customerId}번째 손님의 요리를 만들기 시작합니다...`);
  const startTime = Date.now();
  while (true) {
    const currentTime = Date.now();
    if (currentTime - startTime >= 3000) {
      break;
    }
  }
  console.log(`${customerId}번째 손님의 요리가 완성되었습니다!`);
}
const getFoodFromMart = (customerId) => {
  console.log(`${customerId}번째 손님의 요리를 사오러 친구가 대신 출발...`);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`${customerId}번째 손님의 요리를 가져왔어요!`);
      resolve();
    }, 3000);
  });
}

const serveCustomer = async (customerId) => {
  console.log(`${customerId}번째 손님이 입장했어요. 주문을 받아주세요!`);
  // makeFoodInTheCPU(customerId);
  await getFoodFromMart(customerId);
  console.log(`${customerId}번째 손님이 음식을 받고 가게를 나갔습니다.`);
}
const openRestaurant = () => {
  for (let i = 1; i < 10; i++) {
    serveCustomer(i);
  }
}
openRestaurant();