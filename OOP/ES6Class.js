// class expression
// const PersonCl = class {}

// class declaration
class PersonCl {
  constructor(firstName, birthYear) {
    this.firstName = firstName
    this.birthYear = birthYear
  }

  // Method will be added to .prototype property
  calcAge() {
    console.log(2024 - this.birthYear)
  }

  get age() {
    return 2024 - this.birthYear
  }
}

const jessica = new PersonCl("Jessica", 1997)

console.log(jessica.__proto__)

console.log(jessica.age)

// 1. Classes are NOT hoisted
// 2. Class are first-class citizes
// 3. Classes are executed in strict mode
