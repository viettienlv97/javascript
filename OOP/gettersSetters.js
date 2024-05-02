class PersonCL {
  constructor(fullName, birthYear) {
    this.fullName = fullName
    this.birthYear = birthYear
  }

  get age() {
    return 2024 - this.birthYear
  }

  set fullName(name) {
    console.log("setter")
    if (name.includes(" ")) this._fullName = name
    else alert(`${name} is not a full name`)
  }
  get fullName() {
    return this._fullName
  }
  /**
   * @param {number} year
   */
  set birthYear(year) {
    console.log("setter birth year")
    if (isNaN(Number(year))) alert(`${year} is not a number!`)
    if (Number(year) > 2025 || Number(year) < 1920)
      alert(`${year} is not valid `)
    else this._birthYear = year
  }

  get birthYear() {
    return this._birthYear
  }

  // Static method
  static hey() {
    console.log("Hey there!")
  }
}

const tien = new PersonCL("Viet Tien", 1997)

console.log(tien.fullName)
console.log(tien.age)
