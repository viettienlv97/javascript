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

class EVCl extends CarCl {
  #charge
  constructor(make, speed, charge) {
    super(make, speed)
    this.#charge = charge
  }

  accelerate() {
    this.speed += 20
    this.chargeBatery(this.#charge - 1)
    console.log(
      `'${this.make}' đi với tốc độ ${this.speed} km/h, với mức sạc là ${this.charge} %`
    )
    return this
  }
  chargeBatery(chargeTo) {
    this.#charge = chargeTo
    return this
  }
  get charge() {
    return this.#charge
  }
}
const tesla = new EVCl("Tesla", 0, 100)
tesla.accelerate().brake().accelerate().accelerate().accelerate()
//console.log(tesla)
const rivian = new EVCl("Rivian", 0, 100)
rivian.accelerate()
