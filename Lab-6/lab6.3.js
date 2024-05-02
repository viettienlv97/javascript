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

const EV = function (make, speed, charge) {
  Car.call(this, make, speed)
  this.charge = charge
}
EV.prototype = Object.create(Car.prototype)
EV.prototype.accelerate = function () {
  this.speed += 20
  this.charge -= 1
  console.log(
    `'${this.make}' đi với tốc độ ${this.speed} km/h, với mức sạc ${this.charge} %`
  )
  return this
}
EV.prototype.chargeBatery = function (chargeTo) {
  this.charge = chargeTo
  return this
}

const tesla = new EV("Tesla", 0, 50)
tesla
  .accelerate()
  .accelerate()
  .accelerate()
  .accelerate()
  .accelerate()
  .accelerate()
  .accelerate()
  .brake()
  .chargeBatery(60)
  .accelerate()
