'use strict'

// lab9.1
// tìm số fibo tại vị trí nhập vào.
const fibo = (num, arr = [0, 1]) => {
  if (num > arr.length - 1) {
    const [nextLast, last] = arr.slice(-2)
    arr.push(nextLast + last)
    return fibo(num, arr)
  } else {
    return arr[arr.length - 1]
  }
}

console.log(fibo(45))
