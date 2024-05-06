// tính tổng các số nguyên tố là thừa số của input
// hàm tính tổng với tham số là n
function solve(n) {
  // khai báo biến k và sum
  let k = 2,
    sum = 0
  while (n > 1) {
    // chạy mỗi khi n > 1
    while (n % k == 0) {
      // chạy mỗi khi n / k không dư
      sum += k // gán lại sum = sum + k
      n /= k // gán lại biến n bằng n / k
    }
    k++ // k + 1
  }
  return sum
}
// hàm tính tổng với tham số n
function factorSum(n) {
  while (n != solve(n)) {
    n = solve(n)
  }
  return n
}

console.log(factorSum(100))
