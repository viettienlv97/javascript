'use strict'
import User, { parseUser } from '../models/User.js'
import { getFromStorage, saveToStorage } from './storage.js'
import { directTo } from './helper.js'

const key = 'USER_ARRAY'
const userArr = getFromStorage(key, [])

// DOM
const formRegister = document.getElementById('form-register')
const inputFirstName = document.getElementById('input-firstname')
const inputLastName = document.getElementById('input-lastname')
const inputUsername = document.getElementById('input-username')
const inputPassword = document.getElementById('input-password')
const inputPasswordConfirm = document.getElementById('input-password-confirm')

// Functions

// Validation
const validateUsername = username => {
  if (userArr.find(user => user.username === username)) {
    alert('Username existed!')
    return false
  }

  return true
}
const validatePassword = (password, confirmPassword) => {
  if (!password.length || password.length < 8) {
    alert('Password must be at least 8 characters!')
    return false
  }
  if (password !== confirmPassword) {
    alert('Confirm password not match!')
    return false
  }

  return true
}

// Submit
const submitRegister = e => {
  e.preventDefault()
  const firstName = inputFirstName.value,
    lastName = inputLastName.value,
    username = inputUsername.value,
    password = inputPassword.value,
    confirmPassword = inputPasswordConfirm.value

  if (!validateUsername(username)) return
  if (!validatePassword(password, confirmPassword)) return

  const newUser = new User(firstName, lastName, username, password)
  console.log(newUser)
  userArr.push(newUser)
  console.log(userArr)
  saveToStorage(key, userArr)
  directTo('login')
}

// Event listener
formRegister.addEventListener('submit', submitRegister)
