// Iterative Solution
function fibs(n) {
  const fib = [0, 1];

  if (n === 0) return [];
  if (n === 1) return [fib[0]];
  if (n === 2) return fib;

  for (let i = 2; i < n; i++) {
    fib.push(fib[i - 2] + fib[i - 1]);
  }

  return fib;
}

console.log(fibs(0));
console.log(fibs(1));
console.log(fibs(2));
console.log(fibs(4));
console.log(fibs(8));
