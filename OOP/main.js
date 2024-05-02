"use strict"

// Constructor Functios and the new Operator
const Person = function (firstName, birthYear) {
  // Instance properties
  this.firstName = firstName
  this.birthYear = birthYear

  // Never do this
  // this.calAge = function () {
  //   console.log(2024 - this.birthYear)
  // }
}

const tien = new Person("Tien", 1997)
console.log(tien)

// 1. New {} is created
// 2. Function is called, this = {}
// 3. {} licked to prototype
// 4. function automatically return {}

const van = new Person("Van", 1997)
const vinh = new Person("Vinh", 2000)
console.log(tien instanceof Person)

// Prototypes
Person.prototype.calcAge = function () {
  console.log(2024 - this.birthYear)
}

// Sử dụng prototype có thể làm giảm bộ nhớ và hiệu suất ứng dụng

Person.prototype.isHuman = true

tien.calcAge()
van.calcAge()
vinh.calcAge()

// Person.prototype
console.log(vinh.__proto__)
// Object.prototype
console.log(vinh.__proto__.__proto__)
