function quickSort(arr) {
  if (arr.length <= 1) {
    return arr
  }

  const pivot = arr[0]
  const left = []
  const right = []
  const middle = []

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i])
    } else if (arr[i] === pivot) {
      middle.push(arr[i])
    } else {
      right.push(arr[i])
    }
  }

  return [...quickSort(left), ...middle, ...quickSort(right)]
}

const arr = [2, 3, 9, 2, 2]
const sortedArr = quickSort(arr)
console.log('Mảng đã sắp xếp:', sortedArr)
