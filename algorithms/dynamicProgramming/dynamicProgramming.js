const coins = [1, 5, 7]

// đổi tiền
function minCoinsToChange(amount, coins) {
  let minCoins = new Array(amount + 1).fill(Infinity)
  minCoins[0] = 0

  // lặp từ giá trị 1 cho đến amount
  for (let i = 1; i <= amount; i++) {
    // nếu mệnh giá <= giá trị -> 1 <= 1
    for (let j = 0; j < coins.length; j++) {
      if (coins[j] <= i) {
        // gán số lượng cần đổi của giá trị đó
        minCoins[i] = Math.min(minCoins[i], minCoins[i - coins[j]] + 1)
      }
    }
  }
  //console.log(minCoins)
  return minCoins[amount]
}

// const coins = [1, 2, 5, 10, 20, 50];
const minCoins = minCoinsToChange(32, coins)
console.log('Số tiền tối thiểu cần đổi:', minCoins)
console.timeEnd('coins')
