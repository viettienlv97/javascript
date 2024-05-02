const Car = function (name, speed) {
  this.name = name
  this.speed = speed
}

Car.prototype.accelerate = function () {
  this.speed += 10
  console.log(`'${this.name}' going at ${this.speed} km/h`)
}
Car.prototype.brake = function () {
  if (this.speed == 0) return
  this.speed -= 5
  console.log(`'${this.name}' going at ${this.speed} km/h`)
}

const bmw = new Car("BWM", 120)
bmw.accelerate()
bmw.brake()
bmw.brake()
