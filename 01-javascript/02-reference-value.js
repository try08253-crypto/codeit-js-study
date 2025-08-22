// 참조 값(Refefence Value)

// Object
// : 키와 값의 쌍으로 데이터를 관리합니다.
// : 조회: user.userName, user["userName"]
// : spread: ...
// : destructing
let user1 = {
  userName: "김민정",
  userAge: 19,
};
user1 = {
  ...user1,
  nation: "한국",
};
let user2 = {
  userName: "박지연",
  userAge: 20,
};
user2 = {
  ...user2,
  nation: "미국",
};
console.log(
  `이름: ${user1.userName}, 나이: ${user1.userAge}, 국적: ${user1.nation}`,
);
console.log(
  `이름: ${user2["userName"]}, 나이: ${user2["userAge"]}, 국적: ${user2.nation}`,
);
console.log(Object.keys(user1));
console.log(Object.values(user1));
console.log(Object.entries(user1));

// Array
// : 여러개의 데이터를 관리합니다.
// : 길이: users.length
// : 조회: users[인덱스]
// : 추가: users.push(요소), users.unshift(요소), users.splice(시작 인덱스, 0, 추가할 요소)
// : 삭제: users.splice(시작 인덱스, 제거할 개수), users.shift();
// : spread: ...
// : destructing: const [element1, element2, element3] = [1, 2, 3];
const users = [user1];
users.push(user2);
console.log(`이름: ${users[0].userName}, 나이: ${users[0].userAge}`);
console.log(`이름: ${users[1].userName}, 나이: ${users[1].userAge}`);

// Array 응용법
// map, flatMap, filter, find, findIndex, some, every
let numbers = [1, 2, 3, 4, 5];
console.log(numbers);

let newNumbers = numbers.map((v) => {
  return v * 2;
});
console.log(newNumbers);

let oddNumebrs = numbers.filter((v) => {
  if (v % 2 === 0) {
    return false;
  } else {
    return true;
  }
});
console.log(oddNumebrs);

console.log(users);
let adultUser = users.find((user) => {
  if (user.userAge >= 20) {
    return true;
  } else {
    return false;
  }
});
console.log(adultUser);