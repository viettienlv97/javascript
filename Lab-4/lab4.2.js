'use strict'

// const dogJulia = [3, 5, 2, 12, 7]
// const dogKate = [4, 1, 15, 8, 3]

const dogJulia = [9, 16, 6, 8, 3]
const dogKate = [10, 5, 6, 1, 4]

const checkDogs = function (julia, kate) {
  const newJulia = julia.slice(1, -1)
  const both = [...newJulia, ...kate]

  both.forEach((dogAge, idx) => {
    if (dogAge >= 3) {
      console.log(`Dog number ${idx} is an adult, and is ${dogAge} years old`)
    } else {
      console.log(`Dog number ${idx} is still a puppy`)
    }
  })
}

// const data = [5, 2, 4, 1, 15, 8, 3]
const data = [16, 6, 10, 5, 6, 1, 4]

const calcAverageHumanAge = function (arr) {
  console.log(arr)
  const humanAge = arr.map((age) => (age <= 2 ? 2 * age : 4 * age + 16))
  console.log(humanAge)

  const adult = humanAge.filter((age) => age >= 18)
  console.log(adult)
  const avgAge = adult.reduce((pre, cur) => pre + cur, 0) / adult.length
  console.log(avgAge.toFixed(2))
}
calcAverageHumanAge(data)

//checkDogs(dogJulia, dogKate)
