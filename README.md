# Fibonacci Generator 📈

A simple JavaScript module that generates Fibonacci sequences using both iterative and recursive methods.

## What is the Fibonacci Sequence?

- A series of numbers where each number is the sum of the two preceding ones, typically starting with 0 and 1.

## The Takeaway

Creating the Fibonacci Generator helped me understand different ways to solve the same problem. By implementing both iterative and recursive solutions, I learned about their strengths and when to use each approach.

Key points:

- **Iterative Method:** Used loops to efficiently generate Fibonacci numbers, which works well for larger sequences.
  
- **Recursive Method:** Applied recursive functions to achieve the same result, deepening my understanding of recursion in JavaScript.
  
- **Code Clarity:** Balanced clear and readable code with performance considerations for each method.
  
- **Problem-Solving:** Enhanced my ability to approach problems from multiple angles and implement various solutions.

Overall, this project improved my skills in algorithm design, iterative and recursive programming, and writing clean JavaScript code.

## Usage

```javascript
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

// Example Usage
console.log(fibs(10));    // [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
console.log(fibsRec(10)); // [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
```
