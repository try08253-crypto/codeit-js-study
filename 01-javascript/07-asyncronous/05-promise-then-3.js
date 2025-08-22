// 01-settimeout.js 파일의 job2를 프로미스를 사용해서 구현해보세요.
const delayAddOne = (v) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(v + 1);
    }, 1000)
  });
}
const job = (v) => {
  console.log(v);
  delayAddOne(v)
    .then(v => {
      console.log(v);
      console.log(v + 1);
      return delayAddOne(v + 1);
    })
    .then(v => {
      console.log(v);
      console.log(v + 1);
    })
}
job(1);

// 프로미스는 다변수 함수 체인에서의 중첩 문제를 완벽하게 해결하지 못했다! => async, await 문법이 등장