class CarCl {
  constructor(make, speed) {
    this.make = make
    this.speed = speed
  }
  accelerate() {
    this.speed += 10
    console.log(`'${this.make}' đi với tốc độ ${this.speed} km/h`)
    return this
  }
  brake() {
    this.speed -= 5
    console.log(`'${this.make}' đi với tốc độ ${this.speed} km/h`)
    return this
  }

  get speedUS() {
    return this.speed / 1.6
  }
  set speedUS(speed) {
    this.speed = speed * 1.6
  }
}

const bmw = new CarCl("BMW", 50)
const mercedes = new CarCl("Mercedes", 50)

bmw.accelerate().accelerate().accelerate()
mercedes.accelerate().accelerate().accelerate()

console.log(bmw.speedUS)
mercedes.speedUS = 100
console.log(mercedes.speed)
