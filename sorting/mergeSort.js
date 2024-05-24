// MergeSort(A[1 ... n])
// if n = 1:
//     return A
// m <- [n/2]
// B <- MergeSort(A[1 ... m])
// C <- MergeSort(A[m+1 ... n])
// A' <- Merge(B,C)
// return A'

// Merge(B[1 ... p], C[1 ... q])
// {B and C are sorted}
// D <- empty array of size p + q
// while B and C are both non-empty:
//   b <- the first element of B
//   c <- the first element of C
//   if b <= c:
//     move b from B to the end of D
//   else:
//     move c from C to the end of D
// move the rest of B and C to the end of D
// return D

const merge = (left, right) => {
  let result = []
  let leftIndex = 0
  let rightIndex = 0

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex])
      leftIndex++
    } else {
      result.push(right[rightIndex])
      rightIndex++
    }
  }

  while (leftIndex < left.length) {
    result.push(left[leftIndex])
    leftIndex++
  }

  while (rightIndex < right.length) {
    result.push(right[rightIndex])
    rightIndex++
  }

  return result
}

const MergeSort = arr => {
  if (arr.length <= 1) return arr

  const mid = Math.floor(arr.length / 2)

  const left = arr.slice(0, mid)
  const right = arr.slice(mid)

  return merge(MergeSort(left), MergeSort(right))
}

const arr = Array.from({ length: 100 }, () => Math.floor(Math.random() * 100))

const sorted = MergeSort(arr)
console.log(sorted)
