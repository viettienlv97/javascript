// QuickSort(A, l, r)
// if l >= r:
//   return
// m <- Partition(A,l,r)
// {A[m] is in the final position}
// QuickSort(A, l, m - 1)
// QuickSort(A, m + 1, r)

// Partition(A, l, r)
// x <- A[l] {pivot}
// j <-l
// for i from l - 1 to r:
//   if A[i] <= x:
//     j <- j + 1
//     swap A[j] and A[i]
//   {A[l+1 ... j] <= x, A[j+1 ... i] > x}
// swap A[l] and A[j]
// return j
