'use strict'

const fibonacci = n => {
  let a = 0,
    b = 1
  for (let i = 2; i <= n; i++) {
    let temp = b
    b = (a + b) % 10 // chỉ quan tâm đến số hàng đơn vị
    a = temp
  }
  return b
}

// Tính số Fibonacci thứ n
let n = 331 // Ví dụ: tính số Fibonacci thứ 1000
let fibonacciNumber = fibonacci(n)

console.log(fibonacciNumber)
