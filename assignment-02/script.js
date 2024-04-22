"use strict"

// Data
let breeds = getFromStorage("breeds", [])
let petArr = getFromStorage("pets", [])
let isShowHealthy = false

// DOM
// Form
const formPet = document.getElementById("pet-form")
// Table
const tableBody = document.getElementById("tbody")
// Input
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

// Btn
const btnSubmit = document.getElementById("submit-btn")
const btnHealthy = document.getElementById("healthy-btn")
const btnCalcBmi = document.getElementById("bmi-btn")

// FUNCTION
const getData = () => {
  return {
    id: inputId.value,
    name: inputName.value,
    age: parseInt(inputAge.value),
    type: inputType.value,
    weight: parseInt(inputWeight.value),
    length: parseInt(inputLength.value),
    color: inputColor.value,
    breed: inputBreed.value,
    vaccinated: inputVaccinated.checked,
    dewormed: inputDewormed.checked,
    sterilized: inputSterilized.checked,
    date: new Date()
  }
}

// Bind data to html template
// Table body template
const rowTemplate = ({
  id,
  name,
  age,
  type,
  weight,
  length,
  breed,
  color,
  vaccinated,
  dewormed,
  sterilized,
  bmi = null,
  date
}) => {
  return `
      <tr>
        <th scope="row">${id}</th>
        <td>${name}</td>
        <td>${age}</td>
        <td>${type}</td>
        <td>${weight} kg</td>
        <td>${length} cm</td>
        <td>${breed}</td>
        <td>
          <i class="bi bi-square-fill" style="color: ${color}"></i>
        </td>
        <td><i class="bi ${
          vaccinated ? "bi-check-circle-fill" : "bi-x-circle-fill"
        }"></i></td>
        <td><i class="bi ${
          dewormed ? "bi-check-circle-fill" : "bi-x-circle-fill"
        }"></i></td>
        <td><i class="bi ${
          sterilized ? "bi-check-circle-fill" : "bi-x-circle-fill"
        }"></i></td>
        <td>${bmi ? bmi : "?"}</td>
        <td>${getDateFormat(date)}</td>
        <td>
          <button type="button" onclick="deletePet('${id}')" class="btn btn-danger">Delete</button>
        </td>
      </tr>
    `
}
// Breed template
const breedOption = (breed = null) => {
  if (!breed) return `<option value='' disabled selected>Select breed</option>`
  return `
    <option value=${breed.breed}>${breed.breed}</option>
  `
}

// Render html template to DOM
// Render table body
const renderTableData = pets => {
  let rows = []
  pets.forEach(pet => (rows += rowTemplate(pet)))
  tableBody.innerHTML = rows
}
// Render breed option
const renderBreedOption = breeds => {
  let rows = ""
  rows += breedOption()
  breeds.forEach(b => (rows += breedOption(b)))
  inputBreed.innerHTML = rows
}

// Clear form input
const clearInput = () => {
  inputId.value = ""
  inputName.value = ""
  inputAge.value = ""
  inputType.value = ""
  inputWeight.value = ""
  inputLength.value = ""
  inputColor.value = "#000000"
  inputBreed.value = ""
  inputVaccinated.checked = false
  inputDewormed.checked = false
  inputSterilized.checked = false
}

// Get date format 'dd/mm/yyyy'
const getDateFormat = date => {
  date = new Date(date)
  const day = String(date.getDate()).padStart(2, "0")
  const month = String(date.getMonth() + 1).padStart(2, "0")
  const year = date.getFullYear().toString().substr(-2)
  return `${day}/${month}/${year}`
}

// Submit form
const submit = () => {
  if (validateInput()) {
    const data = getData()
    petArr.push(data)
    clearInput()
    renderTableData(petArr)
    saveToStorage("pets", petArr)
  }
}
// Validate id
const validateInput = () => {
  if (!petArr || !petArr.length) {
    return true
  }
  // id
  for (let pet of petArr)
    if (pet.id === inputId.value) {
      alert("Id must be unique!")
      return false
    }
  return true
}

// Delete pet by id
const deletePet = id => {
  if (confirm("Are you sure?")) {
    const pet = petArr.find(p => p.id === id)
    if (!pet) return
    petArr = petArr.filter(p => p.id !== pet.id)
    renderTableData(petArr)
    saveToStorage("pets", petArr)
  }
}

// Get filtered healthy pets
const filterHealthyPet = pets => {
  return pets.filter(pet => pet.vaccinated && pet.dewormed && pet.sterilized)
}

// Toggle show healthy or all pets
const toggleShowPet = () => {
  if (!isShowHealthy) {
    renderTableData(filterHealthyPet(petArr))
    btnHealthy.textContent = "Show All Pet"
    isShowHealthy = true
  } else {
    renderTableData(petArr)
    btnHealthy.textContent = "Show Healthy Pet"
    isShowHealthy = false
  }
}

// Get pet's BMI
const getBmi = pet => {
  return pet.type === "cat"
    ? ((pet.weight * 886) / pet.length ** 2).toFixed(2)
    : ((pet.weight * 703) / pet.length ** 2).toFixed(2)
}

// Show pet BMI
const calBmi = () => {
  petArr.forEach(pet => (pet.bmi = getBmi(pet)))
  if (isShowHealthy) {
    renderTableData(filterHealthyPet(petArr))
  } else {
    renderTableData(petArr)
    saveToStorage("pets", petArr)
  }
}

// Change breed when input type change
const changeBreeds = () => {
  const type = inputType.value
  const filtered = breeds.filter(b => b.type === type)
  renderBreedOption(filtered)
}

// Render data when open page
renderTableData(petArr)

// Event listener
formPet.addEventListener("submit", e => {
  e.preventDefault()
  submit()
})
btnHealthy.addEventListener("click", toggleShowPet)
btnCalcBmi.addEventListener("click", calBmi)
inputType.addEventListener("change", changeBreeds)
