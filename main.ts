function checkEven(n: number): boolean {
  return n % 2 === 0;
}

console.log(checkEven(4));
console.log(checkEven(5));
console.log(checkEven(6));

function checkOdd(n: number): boolean {
  return !checkEven(n);
}

console.log(checkOdd(4));
console.log(checkOdd(5));
console.log(checkOdd(6));