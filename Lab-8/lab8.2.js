const imageContainer = document.querySelector(".images")

const images = ["img-1.jpg", "img-2.jpg", "img-3.jpg"]

const createImage = imgPath =>
  new Promise((resolve, reject) => {
    const img = document.createElement("img")
    img.src = imgPath
    img.classList.add("image")
    img.addEventListener("load", () => {
      resolve(img)
    })

    img.addEventListener("error", e => {
      reject(new Error(e))
    })
  })

const wait = seconds =>
  new Promise(resolve => {
    setTimeout(resolve, seconds * 1000)
  })

const loadNPause = async () => {
  try {
    let img = await createImage("img-1.jpg")
    imageContainer.appendChild(img)
    await wait(2)
    img.style.display = "none"
    img = await createImage("img-2.jpg")
    imageContainer.appendChild(img)
    await wait(2)
    img.style.display = "none"
  } catch (error) {
    console.error(error)
  }
}

// loadNPause()

// Promise parallel -> resolve if all fullfilled promise, reject if has 1 fail
;(async arr => {
  // Promises parallel
  const data = await Promise.all(arr.map(img => createImage(img)))
  data.forEach(img => {
    img.classList.add("parallel")
    imageContainer.appendChild(img)
  })
})(images)

// Promise race -> return first promise event reject
;(async arr => {
  // Promises race
  const res = await Promise.race(arr.map(img => createImage(img)))
  console.log(res)
})(images)

// Promise allSettled -> return all promise, even reject
Promise.allSettled([
  Promise.resolve("Success"),
  Promise.reject(new Error("Error")),
  Promise.resolve("Another success")
])
  .then(res => console.log(res))
  .catch(err => console.log(err))

// Promise any -> return first fullfill promise, ignore reject
Promise.any([
  Promise.resolve("Success"),
  Promise.reject(new Error("Error")),
  Promise.resolve("Another success")
])
  .then(res => console.log(res + "res"))
  .catch(err => console.log(err))
