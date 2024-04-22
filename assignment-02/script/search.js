"use strict"

// Data
let breeds = getFromStorage("breeds", [])
let petArr = getFromStorage("pets", [])

// DOM
const searchForm = document.getElementById("search-form")
const tableBody = document.getElementById("tbody")
const inputId = document.getElementById("input-id")
const inputName = document.getElementById("input-name")
const inputType = document.getElementById("input-type")
const inputBreed = document.getElementById("input-breed")
const inputVaccinated = document.getElementById("input-vaccinated")
const inputDewormed = document.getElementById("input-dewormed")
const inputSterilized = document.getElementById("input-sterilized")

// Submit search pet
const searchPet = e => {
  e.preventDefault()

  let filtered = petArr.filter(
    pet =>
      (!inputId.value || pet.id.includes(inputId.value)) &&
      (!inputName.value || pet.name.includes(inputName.value)) &&
      (!inputType.value || pet.type === inputType.value) &&
      (!inputBreed.value || pet.breed === inputBreed.value) &&
      (!inputVaccinated.checked || pet.vaccinated) &&
      (!inputDewormed.checked || pet.dewormed) &&
      (!inputSterilized.checked || pet.sterilized)
  )
  renderTableData(filtered)
}

// Get date format dd/mm/yyyy
const getDateFormat = date => {
  date = new Date(date)
  const day = String(date.getDate()).padStart(2, "0")
  const month = String(date.getMonth() + 1).padStart(2, "0")
  const year = date.getFullYear().toString().substr(-2)
  return `${day}/${month}/${year}`
}

// Html Template
// Pets row template
const rowTemplate = pet => {
  return `
      <tr>
        <th scope="row">${pet.id}</th>
        <td>${pet.name}</td>
        <td>${pet.age}</td>
        <td>${pet.type}</td>
        <td>${pet.weight} kg</td>
        <td>${pet.length} cm</td>
        <td>${pet.breed}</td>
        <td>
          <i class="bi bi-square-fill" style="color: ${pet.color}"></i>
        </td>
        <td><i class="bi ${
          pet.vaccinated ? "bi-check-circle-fill" : "bi-x-circle-fill"
        }"></i></td>
        <td><i class="bi ${
          pet.dewormed ? "bi-check-circle-fill" : "bi-x-circle-fill"
        }"></i></td>
        <td><i class="bi ${
          pet.sterilized ? "bi-check-circle-fill" : "bi-x-circle-fill"
        }"></i></td>
        <td>${pet.bmi ? pet.bmi : "?"}</td>
        <td>${getDateFormat(pet.date)}</td>
      </tr>
    `
}
// Breeds option template
const breedOption = (breed = null) => {
  if (!breed) return `<option value='' selected>Select breed</option>`
  return `
    <option value=${breed.breed}>${breed.breed}</option>
  `
}

// Render
// Render breeds option
const renderBreedOption = breeds => {
  let rows = ""
  rows += breedOption()
  breeds.forEach(b => (rows += breedOption(b)))
  inputBreed.innerHTML = rows
}
// Render pets table
const renderTableData = pets => {
  let rows = []
  pets.forEach(pet => (rows += rowTemplate(pet)))
  tableBody.innerHTML = rows
}

// Change breed option by type
const changeBreeds = () => {
  const filtered = breeds.filter(b => b.type === inputType.value)
  switch (inputType.value) {
    case "":
      renderBreedOption(breeds)
      break
    default:
      renderBreedOption(filtered)
      break
  }
}

// Render breeds option when access page
renderBreedOption(breeds)

// Event listener
inputType.addEventListener("change", changeBreeds)
searchForm.addEventListener("submit", searchPet)
