const mark = new Array(100).fill(false)

const isPrime = n => {
  if (n <= 1) return false
  let a = 2
  while (true) {
    if (a * a > n) break
    let p = a * a
    while (p <= n) {
      mark[p] = true
      p += a
    }
    ++a

    while (a <= n && mark[a]) ++a
    if (a > n) break
  }
  console.log(mark)
  return mark[n] ? false : true
}

console.log(isPrime(50))
