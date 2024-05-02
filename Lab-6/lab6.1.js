const Car = function (make, speed) {
  this.make = make
  this.speed = speed
}
Car.prototype.accelerate = function () {
  this.speed += 10
  console.log(`'${this.make}' đi với tốc độ ${this.speed} km/h`)
  return this
}
Car.prototype.brake = function () {
  this.speed -= 5
  console.log(`'${this.make}' đi với tốc độ ${this.speed} km/h`)
  return this
}

const bmw = new Car("BMW", 120)
const mercedes = new Car("Mercedes", 95)

bmw.accelerate().accelerate().brake().brake().brake().brake()
mercedes.accelerate().accelerate().brake().brake().brake().brake()
