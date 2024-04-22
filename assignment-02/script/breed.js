"use strict"

// Data
let breeds = getFromStorage("breeds", [])

// DOM
const breedForm = document.getElementById("breed-form")
const breedInput = document.getElementById("input-breed")
const typeInput = document.getElementById("input-type")
const tbody = document.getElementById("tbody")

// Submit breed
const submitBreed = e => {
  e.preventDefault()

  const type = typeInput.value
  const breed = breedInput.value.toLowerCase()

  if (breeds.find(b => b.breed === breed)) return

  breeds.push({ type, breed })
  saveToStorage("breeds", breeds)
  renderTable()
}

// Breed row template
const templateTr = (breed, index) => {
  return `<tr><td>${index + 1}</td>
    <td>${breed.breed}</td>
    <td>${breed.type}</td>
    <td><button class="btn btn-danger" onclick="deletePet('${index}')" >Delete</button></td>
  </tr>
  `
}

// Render breed table
const renderTable = () => {
  let rows = ""
  breeds.forEach((b, index) => (rows += templateTr(b, index)))
  tbody.innerHTML = rows
}

// Delete selected breed
const deletePet = index => {
  breeds.splice(index, 1)
  renderTable()
  saveToStorage("breeds", breeds)
}

// Render table when open page
renderTable()

// Add event listener
breedForm.addEventListener("submit", submitBreed)
