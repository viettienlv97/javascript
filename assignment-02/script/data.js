"use strict"

// Data
let petArr = getFromStorage("pets")
let inputFile

// DOM
const exportBtn = document.getElementById("export-btn")
const importBtn = document.getElementById("import-btn")
const fileInput = document.getElementById("input-file")
const jsonForm = document.getElementById("json-form")

// Export pet list file
const savePetList = () => {
  const blob = new Blob([JSON.stringify(petArr)], {
    type: "application/json"
  })
  saveAs(blob, "pets.json")
}

// Import pet from file
const importPets = () => {
  if (!fileInput.files[0]) {
    alert("Please input json file!")
  }

  const reader = new FileReader()
  reader.onload = e => {
    const content = e.target.result
    mergePetArray(JSON.parse(content))
    saveToStorage("pets", petArr)
    alert("Imported pet json")
  }
  reader.readAsText(fileInput.files[0])
}

// Merge pets with imported pets
const mergePetArray = importedPetArr => {
  if (!importedPetArr || !importedPetArr.length) return

  if (!petArr || !petArr.length) {
    petArr = importedPetArr
    return
  }

  importedPetArr.forEach(newPet => {
    // Tìm ra các pet bị trùng id, và ghi đè từ file import
    const index = petArr.findIndex(p => p.id === newPet.id)
    if (index !== -1) {
      petArr[index] = newPet
    } else {
      petArr.push(newPet)
    }
  })
}

// Event listener
exportBtn.addEventListener("click", savePetList)
importBtn.addEventListener("click", importPets)
