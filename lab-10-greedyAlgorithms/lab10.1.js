// Đổi tiền

const moneysDenos = [1, 5, 10]

const count = (moneys, denos) => {
  if (moneys < 1 || moneys > 1000) return 'Invalid Input'

  denos.sort((a, b) => b - a)
  let count = 0
  let i = 0

  while (moneys > 0 && i < denos.length) {
    if (denos[i] <= moneys) {
      const c = Math.floor(moneys / denos[i])
      count += c
      moneys -= c * denos[i]
    }
    i++
  }
  return count
}

console.log(count(259, moneysDenos))
