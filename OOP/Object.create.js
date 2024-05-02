const PersonProto = {
  calcAge() {
    console.log(2024 - this.birthYear)
  },

  init(firstName, birthYear) {
    this.firstName = firstName
    this.birthYear = birthYear
  }
}

const tien = Object.create(PersonProto)
tien.init("Tien", 1997)
tien.calcAge()
