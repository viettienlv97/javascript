// Importing
import { totalPrice } from "./cart.js"

console.log(totalPrice)

// await keywork working outside async function - only working in module
// Top level await
// const res = await fetch("https://jsonplaceholder.typicode.com/users")
// const data = await res.json()
// console.log(data)

const getLastUser = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users")
  const data = await res.json()
  console.log(data)
  return { name: data.at(-1).name }
}
const user = await getLastUser()
console.log(user)
