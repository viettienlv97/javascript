// tìm kiếm nhị phân

const data = [1, 5, 8, 12, 13, 15, 20, 45] // mảng chứa giá trị tăng dần
const finds = [8, 1, 23, 1, 11, 20] // mảng chứa các giá trị cần tìm

const binarySearch = (dataArr, findArr) => {
  let result = []

  // vòng lặp duyệt lần lượt các giá trị trong mảng cần tìm
  for (let i = 0; i < findArr.length; i++) {
    let left = 0, // khai báo index bên trái
      right = dataArr.length - 1, // khai báo index bên phải
      foundIndex = -1 // khai báo index tìm thấy, mặc định là không tìm thấy (-1)

    // lặp lại mỗi khi trái và phải còn giá trị
    while (left <= right) {
      // khai báo index giữa bằng phần nguyên trung bình cộng của độ dài mảng
      let middle = Math.floor((left + right) / 2)

      if (dataArr[middle] === findArr[i]) {
        foundIndex = middle
        break
      } else if (dataArr[middle] < findArr[i]) {
        left = middle + 1
      } else {
        right = middle - 1
      }
    }

    result.push(foundIndex)
  }
  return result
}

console.log(binarySearch(data, finds))
