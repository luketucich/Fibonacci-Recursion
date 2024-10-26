// Iterative Solution
function fibs(n) {
  const fib = [0, 1];
  const res = [];

  for (let i = 0; i < n; i++) {
    if (res.length < 1) {
      res.push(fib[0]);
    } else if (res.length < 2) {
      res.push(fib[1]);
    } else {
      res.push(res[i - 2] + res[i - 1]);
    }
  }

  return res;
}

console.log(fibs(5));
console.log(fibs(8));
