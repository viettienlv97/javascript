setTimeout(() => {
  console.log("1s passed")
  setTimeout(() => {
    console.log("2s passed")
    setTimeout(() => {
      console.log("3s passed")
    }, 1000)
  }, 1000)
}, 1000)
