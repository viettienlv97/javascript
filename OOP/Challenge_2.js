class Car {
  constructor(make, speed) {
    this.make = make
    this.speed = speed
  }

  get speedUS() {
    return this.speed / 1.6
  }
  set speedUS(speed) {
    this.speed = speed * 1.6
  }

  accelerate() {
    this.speed += 10
    console.log(`'${this.make}' going at ${this.speed} km/h`)
  }
  brake() {
    this.speed -= 5
    console.log(`'${this.make}' going at ${this.speed} km/h`)
  }
}

const ford = new Car("Ford", 120)
console.log(ford.__proto__ === Car.prototype)
ford.accelerate()
ford.accelerate()
ford.accelerate()
ford.brake()
console.log(ford.speedUS)
