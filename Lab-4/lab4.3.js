'use strict'

// const data = [5, 2, 4, 1, 15, 8, 3]
const data = [16, 6, 10, 5, 6, 1, 4]

const calcAverageHumanAge = (arr) =>
  arr
    .map((age) => (age <= 2 ? 2 * age : 4 * age + 16))
    .filter((age) => age >= 18)
    .reduce(
      (pre, cur, idx, filtered) =>
        idx === filtered.length - 1 ? (pre + cur) / filtered.length : pre + cur,
      0
    )
    .toFixed(2)

console.log(calcAverageHumanAge(data))
