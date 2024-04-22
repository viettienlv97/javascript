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

checkDogs(dogJulia, dogKate)
