function knapsack(golds, W) {
  // lấy ra số lượng các thỏi vàng
  const n = golds.length
  // tạo 1 mảng 2 chiều chạy từ 0 -> n và từ 0 -> W
  const DP = Array.from({ length: n + 1 }, () => Array(W + 1).fill(0))

  // chạy vòng lặp từ 1 đến n
  for (let i = 1; i <= n; i++) {
    // chạy vòng lặp từ 0 đến W
    for (let w = 0; w <= W; w++) {
      // kiểm tra trọng lượng của thỏi vàng i-1 <= w
      if (golds[i - 1] <= w) {
        // nếu đúng
        //-> lấy giá trị lớn nhất của túi khi thêm thỏi vàng i-1 với khi không thêm
        DP[i][w] = Math.max(
          golds[i - 1] + DP[i - 1][w - golds[i - 1]],
          DP[i - 1][w]
        )
      } else {
        // nếu sai -> trọng lượng của thỏi vàng i-1 > w
        // không thể thêm thỏi vàng i-1 vào
        // gán vị trí DP[i][w] = DP[i - 1][w]
        DP[i][w] = DP[i - 1][w]
      }
    }
  }
  console.log(DP)
  return DP[n][W]
}
const maxWeight = 19

const golds = [2, 5, 7, 8, 13, 10]
console.log(knapsack(golds, maxWeight))
