// Tối đa giá trị của chiến lợi phẩm

class Bag {
  constructor(number, size) {
    this.number = number
    this.size = size
  }

  getBagPrice(items) {
    // Sắp xếp lại mảng các item đưa vào túi theo giá trị giảm dần
    const sortedByPrice = items.sort(
      (i1, i2) => i2.itemValue() - i1.itemValue()
    )

    let bagValue = 0
    let i = 0
    // lặp qua tất cả các item trong mảng
    while (this.size > 0 && this.number > 0 && i <= sortedByPrice.length) {
      let item = sortedByPrice[i]
      if (item.size > this.size) {
        bagValue += item.price / (item.size / this.size)
        this.size -= this.size
        break
      }

      bagValue += item.price
      this.size -= item.size
      this.number--
      i++
    }
    return bagValue.toFixed(4)
  }
}

class Item {
  constructor(price, size) {
    this.price = price
    this.size = size
  }
  itemValue() {
    return this.price / this.size
  }
}

// trường hợp bình thường
// const bag = new Bag(3, 70)
// const items = [new Item(60, 20), new Item(100, 50), new Item(120, 30)]

// trường hợp nhét lẻ
// const bag = new Bag(1, 10)
// const items = [new Item(500, 30)]

// trường hợp hiệu suất tệ -> giảm giá trị của túi khi giới hạn vật phẩm là 1
// const bag = new Bag(1, 500)
// const items = [new Item(500, 30), new Item(600, 200)]
// Quiz 10
const bag = new Bag(3, 7)
const items = [new Item(20, 4), new Item(18, 3), new Item(14, 2)]
console.log(bag.getBagPrice(items))
