// 원시 값(Primitive Value)

// 변수
// : 값에 이름을 붙인 것
// : const(값을 변경할 수 없음, undefined로 값을 초기화할 수 없다)
// : let(값을 변경할 수 있음, undefined로 값을 초기화할 수 있다)
// : user_name, userName, UserName: 언어마다 선호하는 형식이 다르다.

// 타입
// : 문자열(string): "", '', `${변수}`, "\n"
// :   문자열 값으로 메소드를 사용하면 런타임에 동적으로 String 객체가 생성되고 사용후 제거된다.
// :   const address = "    대한민국-서울광역시-강남구     ";
// :   console.log(address.trim().split("-"));
// :   출력 결과: ["대한민국", "서울광역시", "강남구"];
// : 숫자(number): 숫자, NaN, Infinity, -Infinity
// : 참 또는 거짓(boolean): true, false
// : 값을 정의하지 않음: undefined
// : 값이 없음: null
// : 큰 정수(bigint)
// : symbol

// 형변환
// : String(값)
// : Number(값)(실패하면 NaN), parseInt(값), parseFloat(값)
// : Boolean(값): 0, "", null, undefined, NaN = falsy 값
const userName1 = "김민정";
const userAge1 = 19;
console.log(`이름: ${userName1}, 나이: ${userAge1}`);

const userName2 = "박지연";
const userAge2 = 20;
console.log(`이름: ${userName2}, 나이: ${userAge2}`);

console.log(Boolean(0)); // false
console.log(Boolean("")); // false
console.log(Boolean(null)); // false
console.log(Boolean(undefined)); // false
console.log(Boolean(NaN)); // faalse

const x = "aksdbkashd";