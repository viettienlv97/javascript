"use strict"

// Data
let breeds = getFromStorage("breeds", [])
let petArr = getFromStorage("pets", [])
let isShowHealthy = false

// DOM
const tableBody = document.getElementById("tbody")
const formContainer = document.getElementById("container-form")
const editForm = document.getElementById("edit-form")
const inputId = document.getElementById("input-id")
const inputName = document.getElementById("input-name")
const inputAge = document.getElementById("input-age")
const inputType = document.getElementById("input-type")
const inputWeight = document.getElementById("input-weight")
const inputLength = document.getElementById("input-length")
const inputColor = document.getElementById("input-color-1")
const inputBreed = document.getElementById("input-breed")
const inputVaccinated = document.getElementById("input-vaccinated")
const inputDewormed = document.getElementById("input-dewormed")
const inputSterilized = document.getElementById("input-sterilized")

// Get date format dd/mm/yyyy
const getDateFormat = date => {
  date = new Date(date)
  const day = String(date.getDate()).padStart(2, "0")
  const month = String(date.getMonth() + 1).padStart(2, "0")
  const year = date.getFullYear().toString().substr(-2)
  return `${day}/${month}/${year}`
}

// Template
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
        <td>
          <button type="button" onclick="editPet('${
            pet.id
          }')" class="btn btn-warning">Edit</button>
        </td>
      </tr>
    `
}
// Breeds option template
const breedOption = (breed = null) => {
  if (!breed) return `<option value='' disabled selected>Select breed</option>`
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
// Render pets data
const renderTableData = pets => {
  let rows = []
  pets.forEach(pet => (rows += rowTemplate(pet)))
  tableBody.innerHTML = rows
}

// Change breeds option
const changeBreeds = () => {
  const type = inputType.value
  const filtered = breeds.filter(b => b.type === type)
  renderBreedOption(filtered)
}

// Bind data
const bindData = id => {
  const pet = petArr.find(p => p.id === id)
  inputId.value = pet.id
  inputName.value = pet.name
  inputAge.value = pet.age
  inputType.value = pet.type
  changeBreeds()
  inputWeight.value = pet.weight
  inputLength.value = pet.length
  inputColor.value = pet.color
  inputBreed.value = pet.breed
  inputVaccinated.checked = pet.vaccinated ? true : false
  inputDewormed.checked = pet.dewormed ? true : false
  inputSterilized.checked = pet.sterilized ? true : false
}

// Select pet to edit
const editPet = id => {
  bindData(id)
  formContainer.classList.remove("hide")
}

// Calc BMI for pet after edit
const getBmi = pet => {
  return pet.type === "cat"
    ? ((pet.weight * 886) / pet.length ** 2).toFixed(2)
    : ((pet.weight * 703) / pet.length ** 2).toFixed(2)
}

// Submit edit pet
const submit = e => {
  e.preventDefault()
  const editedPet = {
    id: inputId.value,
    name: inputName.value,
    age: inputAge.value,
    type: inputType.value,
    weight: inputWeight.value,
    length: inputLength.value,
    color: inputColor.value,
    breed: inputBreed.value,
    vaccinated: inputVaccinated.checked,
    dewormed: inputDewormed.checked,
    sterilized: inputSterilized.checked,
    date: new Date()
  }
  editedPet.bmi = getBmi(editedPet)
  petArr[petArr.findIndex(p => p.id === editedPet.id)] = editedPet
  renderTableData(petArr)
  saveToStorage("pets", petArr)
  formContainer.classList.add("hide")
}

// Render pets table when access page
renderTableData(petArr)

// Add event listener
inputType.addEventListener("change", changeBreeds)
editForm.addEventListener("submit", submit)
