'use strict'
// số nguyên tố: là số chỉ chia hết cho 1 và chính nó

// O(n)
function isPrime(n) {
  if (n <= 1) return false
  for (let i = 0; i <= n - 1; i++) {
    if (n % i == 0) return false
  }
  return true
}
// O(√n) -> hiệu quả hơn
function isPrime_2(n) {
  // nếu <= 1 thì sai
  if (n <= 1) return false
  if (n <= 3) return true //nếu <= 3 (2,3) thì là số nguyên tố
  if (n % 2 == 0 || n % 3 == 0) return false // nếu chia hết cho 2 hoặc 3 thì sai
  let i = 5
  while (i * i <= n) {
    if (n % i == 0 || n % (i + 2) == 0) return false
    i += 6
  }
  return true
}
console.log(isPrime_2(5))
