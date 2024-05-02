console.log("Test start!")
setTimeout(() => {
  console.log("0 sec timer")
}, 0)
Promise.resolve("Resolve promise 1").then(res => console.log(res))
Promise.resolve("Resolve promise 2").then(res => {
  console.time("Start")

  for (let i = 0; i < 10000000; i++) {
    if (i == 9999999) console.log(i)
  }
  console.timeEnd("Start")

  console.log(res)
})

console.log("Test end")
