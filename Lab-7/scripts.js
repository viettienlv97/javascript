const cityForm = document.getElementById("city-form")
const cityInput = document.getElementById("city-input")
const msg = document.querySelector(".msg")
const list = document.querySelector(".ajax-section .cities")

let cities = ""

const apiKey = "68ebac74216e6ecfdab29882791cb59f"

const html = ({ name, sys, main, weather }) => {
  return `<li class='city'>
    <div><span class='city-name'>${name}</span><sup>${sys.country}</sup></div>
    <div class='city-temp'>${main.temp}</div>
    <img class='city-icon' src='https://openweathermap.org/img/wn/${weather[0].icon}@2x.png' />
    <span>${weather[0].description}</span>
  </li>`
}

cityForm.addEventListener("submit", function (e) {
  e.preventDefault()

  if (!cityInput.value) {
    cityInput.focus()
    return
  }

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput.value}&appid=${apiKey}&units=metric`

  fetch(url)
    .then(res => res.json())
    .then(
      data => {
        console.log(data)
        const { main, name, sys, weather, cod } = data
        console.log(cod)
        if (cod == 404) {
          alert(`Cannot find ${cityInput.value} city`)

          cityInput.value = ""
          cityInput.focus()
          return
        }
        const temp = html({ main, name, sys, weather })
        cities += temp
        list.innerHTML = cities

        cityInput.value = ""
        cityInput.focus()
      },
      err => console.log(err)
    )
})
