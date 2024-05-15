const arr = new Array(100).fill(0)

// hàm lọc số nguyên tố trong array
const snt = n => {
  for (let i = 2; i <= n; i++) {
    arr[i] = 1
  }
  arr[0] = arr[1] = 0 // gán 0, 1 là 0
  for (let i = 2; i * i <= n; i++) {
    if (arr[i]) {
      for (let j = 2 * i; j <= n; j += i) {
        arr[j] = 0
      }
    }
  }
}

function greatestCommonPrimeDivisor(a, b) {
  snt(Math.min(a, b))
  console.log(arr)

  for (let i = Math.min(a, b); i >= 2; i--) {
    if (arr[i] && a % i == 0 && b % i == 0) return i
  }
  return -1
}

console.log(greatestCommonPrimeDivisor(357, 234))
