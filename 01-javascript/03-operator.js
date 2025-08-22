// 1. 기본 연산자
// =
// +, -, *, /, %
// +=, -=, *=, /=, %=
// ++, --

// 2. 비교 연산자
// ===, !==
// <, <=, >, >=

// 3. 논리 연산자
// && (AND, 두 조건이 모두 true일 때만 true)
// || (OR, 두 조건 중 하나라도 true이면 true)
// ! (NOT, 논리 값을 반대로 변경)(0, "", null, undefined, NaN는 false로 취급)

// 4. 타입 체크 연산자: typeof
// null: object로 반환됩니다. null인지 확인하려면 myNull === null처럼 엄격한 비교를 사용하는 것이 좋습니다.
// array: object로 반환됩니다. 배열인지 확인하려면 Array.isArray() 메서드를 사용하는 것이 더 정확합니다.
const myString = "hello";
console.log(typeof myString); // "string"

const myNumber = 123;
console.log(typeof myNumber); // "number"

const myBoolean = true;
console.log(typeof myBoolean); // "boolean"

let myUndefined;
console.log(typeof myUndefined); // "undefined"

const myNull = null;
console.log(typeof myNull); // "object" > 자바스크립트 개발자 초기 실수

const myObject = { name: "John" }; // new Object와 같다.
console.log(typeof myObject); // "object"

const myArray = []; // new Array()와 같다. new Object의 자식이다.
console.log(typeof myArray); // "object"

const myFunction = function () { };
console.log(typeof myFunction); // "function", new Object의 자식이다.

// 5-1. 특수 연산자: 삼항 연산자
const user = { name: "김철수", age: 20 };

console.log(user.age >= 20 ? "성인" : "청소년");

// 5-2. 특수 연산자: 옵셔널 체이닝
// : 속성에 접근할 때, 속성이 null 또는 undefined이면 에러를 내지 않고 undefined를 반환합니다.
console.log(user.phone?.number); // undefined

// 5-3. 특수 연산자: 널 병합 연산자
// : 왼쪽 값이 null 또는 undefined인 경우 오른쪽 값을 반환합니다.
console.log(user.phone?.number ?? "010-XXX-XXXX"); // 010-XXX-XXXX

// 6. 상속 관계 체크 연산자: instanceof
class Animal { }
class Dog extends Animal { }
const myDog = new Dog();
const myAnimal = new Animal();
console.log(myDog instanceof Dog); // true
console.log(myDog instanceof Animal); // true
console.log(myAnimal instanceof Dog); // false