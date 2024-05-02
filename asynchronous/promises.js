// const getCountryData = function (country) {
//   fetch("https://restcountries.com/v3.1/name/vietnam")
//     .then(res => res.json())
//     .then(data => {
//       console.log(data[0])
//       const neighbour = data[0].borders[0]

//       if (!neighbour) return
//       return fetch("https://restcountries.com/v3.1/alpha/" + neighbour)
//     })
//     .then(res => res.json())
//     .then(data => console.log(data[0]))
// }

// getCountryData("vietnam")

// const lotteryPromise = new Promise((resolve, reject) => {
//   console.log("Lottery draw is happening")
//   setTimeout(() => {
//     if (Math.random() >= 0.5) {
//       resolve("You win!")
//     } else {
//       reject(new Error("You lost your money!"))
//     }
//   }, 2000)
// })

// lotteryPromise.then(res => console.log(res)).catch(err => console.log(err))

// Promisifying setTimeout
// const wait = seconds =>
//   new Promise(resolve => {
//     setTimeout(resolve, seconds * 1000)
//   })

// const seconds = 2
// wait(seconds)
//   .then(() => {
//     console.log(`I waited for ${seconds} seconds`)
//     return wait(seconds)
//   })
//   .then(() => console.log(`I waited for ${seconds} seconds`))

const getPosition = () => {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject)
  })
}

const getMap = (lat, lon) => {
  fetch(
    `https://geocode.maps.co/reverse?lat=${lat}&lon=${lon}&api_key=662b846921753925840572huzb96d9f`
  )
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.log(err))
}
getPosition()
  .then(p => {
    console.log(p)
    getMap(p.coords.latitude, p.coords.longitude)
  })
  .catch(e => console.log(e))
