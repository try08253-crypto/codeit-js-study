// 고차함수: 함수의 인자로 다른 함수를 받는 함수
const numbers = [1, 2, 3, 4, 5];

const forEach = (callback, arr) => {
  for (const element of arr) {
    callback(element);
  }
}
forEach(v => console.log(v), numbers);
numbers.forEach(v => console.log(v));

const map = (callback, arr) => {
  const newArr = [];
  for (const element of arr) {
    newArr.push(callback(element));
  }
  return newArr;
}
console.log(map(v => v * 2, numbers));
console.log(numbers.map(v => v * 2));

const filter = (callback, arr) => {
  const newArr = [];
  for (const element of arr) {
    if (callback(element)) {
      newArr.push(element);
    }
  }
  return newArr;
}
console.log(filter(v => v % 2 === 0 ? true : false, numbers));
console.log(numbers.filter(v => v % 2 === 0 ? true : false));

const some = (callback, arr) => {
  for (const element of arr) {
    if (callback(element)) {
      return true;
    }
  }
  return false;
}
console.log(some(v => v > 5 ? true : false, numbers));
console.log(numbers.some(v => v > 5 ? true : false));

const every = (callback, arr) => {
  for (const element of arr) {
    if (!callback(element)) {
      return false;
    }
  }
  return true;
}
console.log(every(v => v > 5 ? true : false, numbers));
console.log(numbers.every(v => v > 5 ? true : false));

const find = (callback, arr) => {
  for (const element of arr) {
    if (callback(element)) {
      return element;
    }
  }
}
console.log(find(v => v % 5 === 3 ? true : false, numbers));
console.log(numbers.find(v => v % 5 === 3 ? true : false));

const findIndex = (callback, arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i])) {
      return i;
    }
  }
  return -1;
}
console.log(findIndex(v => v % 5 === 3 ? true : false, numbers));
console.log(numbers.findIndex(v => v % 5 === 3 ? true : false));

const reduce = (callback, acc, arr) => {
  for (const element of arr) {
    acc = callback(acc, element);
  }
  return acc;
}
console.log(reduce((acc, v) => acc * v, 1, numbers));
console.log(numbers.reduce((acc, v) => acc * v, 1));

const flatMap = (callback, arr) => {
  const newArr = [];
  for (const element of arr) {
    const result = callback(element);
    if (Array.isArray(result)) {
      newArr.push(...result);
    } else {
      newArr.push(result);
    }
  }
  return newArr;
}
console.log(flatMap(v => [v * 10, v * 20], numbers));
console.log(numbers.flatMap(v => [v * 10, v * 20]));