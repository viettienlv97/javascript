'use strict'

const tien = {
  name: 'Tien',
  age: 27,
}
console.log(tien)
const change = (person) => {
  person.name = 'Viet Tien'
  person.age = 28
}

change(tien)

console.log(tien)
