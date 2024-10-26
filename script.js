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

// Recursive Solution
function fibsRec(n) {
  if (n === 0) return [];
  if (n === 1) return [0];
  if (n === 2) return [0, 1];

  const prevFib = fibsRec(n - 1);
  const nextFib = prevFib[prevFib.length - 2] + prevFib[prevFib.length - 1];
  prevFib.push(nextFib);
  return prevFib;
}