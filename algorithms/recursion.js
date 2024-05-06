// Recursion

// Any situation where you do something, and depending on the results,
// you might do it again.

// In programming, recursion occurs when a function calls itself.

// Reason to use (not abuse) recursion:
// 1. Less code
// 2. Elegant code (aka pleasing to look at)
// 3. Incresed readability

// Reason to NOT use recursion:
// 1. Performance
// 2. Possibly more difficult to debug (follow the logic)
// 3. Is the readability improved?

// Fibonacci sequence
// 0, 1, 1, 2, 3, 5, 8, 13, 21, etc.

// Without recursion:
const fibonacci = (num, array = [0, 1]) => {
  // using while loop
  while (num > 2) {
    // get two last number in array
    const [nextToLast, last] = array.slice(-2)
    // push sum of two number to array
    array.push(nextToLast + last)
    num -= 1
  }
  return array
}
//console.log(fibonacci(12))

// With recursion
const fib = (num, array = [0, 1]) => {
  if (num <= 2) return array
  const [nextToLast, last] = array.slice(-2)
  return fib(num - 1, [...array, nextToLast + last])
}
//console.log(fib(12))

const fibPos = (num, array = null) => {
  if (array == null) {
    array = [0, 1]
  }
  const [second, last] = array.slice(-2)
  array.push(second + last)
  if (num < second + last) return 'Không có đâu'
  else if (num === second + last) return array.length + 1
  else return fibPos(num, array)
}

console.log(fibPos(21))
