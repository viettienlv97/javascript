// Phần tử đa số

const arr = [1, 2, 4, 4, 3, 4, 5, 4]
const n = arr.length

const result = (arr, n) => {
  const map = new Map() // khai báo Map mới

  // lặp lại các giá trị trong mảng
  for (let i = 0; i < n; i++) {
    // kiểm tra xem map đã chứa key là arr[i] chưa
    if (map.has(arr[i])) {
      // nếu đã có thì +1 giá trị của key
      const count = map.get(arr[i]) + 1
      // kiểm tra xem count đã là phần tử đa số chưa
      if (count >= n / 2) {
        // nếu rồi thì in ra và thoát
        console.log(1)
        return
      } else {
        // nếu chưa thì gán lại giá trị mới cho key đó
        map.set(arr[i], count)
      }
    } else {
      // nếu chưa có thì thêm cặp giá trị mới
      map.set(arr[i], 1)
    }
  }
  // nếu vòng lặp không dừng lại thì in ra không có phần tử đa số
  console.log(0)
}

result(arr, n)
