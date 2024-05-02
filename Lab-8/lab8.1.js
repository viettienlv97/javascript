let imgContainer = document.querySelector(".images")

const createImage = imgPath =>
  new Promise((resolve, reject) => {
    const img = document.createElement("img")
    img.src = imgPath
    img.classList.add("image")
    img.addEventListener("load", () => {
      console.log("loaded")
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

createImage("img-1.jpg")
  .then(img => {
    imgContainer.appendChild(img)
    return img
  })
  .then(() => wait(2))
  .then(() => {
    document.querySelectorAll(".image")[0].style.display = "none"
    return createImage("img-4.jpg")
  })
  .then(img => {
    imgContainer.appendChild(img)
  })
  .then(() => wait(2))
  .then(() => {
    document.querySelectorAll(".image")[1].style.display = "none"
  })
  .catch(err => console.log(err))
