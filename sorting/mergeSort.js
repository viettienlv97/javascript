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
