// Máy tính nguyên thuỷ
const method = ['plus', 'double', 'triple']

const calculator = number => {
  let minCalc = new Array(number + 1).fill(Infinity)

  // gán các số phép tính tối thiểu từ 1 -> 3
  minCalc[0] = 0
  minCalc[1] = 0
  minCalc[2] = 1
  minCalc[3] = 1

  // lặp lại từ giá trị 4 đến number
  for (let i = 4; i <= number; i++) {
    // tìm số phép tính của các giá trị tính ra i
    // plus là số phép tính của số đứng trước số i
    let plus = minCalc[i - 1] + 1
    // double là số phép tính của số i % 2
    let double = i % 2 === 0 ? minCalc[i / 2] + 1 : Infinity
    // triple là số phép tính của số i % 3
    let triple = i % 3 === 0 ? minCalc[i / 3] + 1 : Infinity
    if (i === 4 || i === 5 || i === 96234) {
      // console.log(plus)
      // console.log(double)
      // console.log(triple)
    }
    //
    minCalc[i] = Math.min(plus, double, triple)
  }
  return minCalc[number]
}

console.log(calculator(96237))
