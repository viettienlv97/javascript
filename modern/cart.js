// Exporting

// Blocking code
console.time("End fetching")
await fetch(`https://jsonplaceholder.typicode.com/users`)
console.timeEnd("End fetching")

export const totalPrice = 100
