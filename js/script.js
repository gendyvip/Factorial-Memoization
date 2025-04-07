function memoizedFactorial() {
  var existed = {};
  var fact;
  return function factorial(n) {
    if (n === 0 || n === 1) return 1;
    if (existed[n]) return existed[n];
    else {
      fact = n * factorial(n - 1);
      existed[n] = fact;
      return fact;
    }
  };
}

var factorial = memoizedFactorial();
console.log(factorial(4));
console.log(factorial(5));
