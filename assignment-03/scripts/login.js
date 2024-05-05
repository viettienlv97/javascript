'use strict'
import { getFromStorage, saveToStorage } from './storage.js'
import { directToHome } from './helper.js'

const key = 'USER_ARRAY'
const userArr = getFromStorage(key, [])

// DOM
const formLogin = document.getElementById('form-login')
const inputUsername = document.getElementById('input-username')
const inputPassword = document.getElementById('input-password')

// Function
// Check user
const checkUser = (username, password) => {
  const loginUser = userArr.find(user => user.username === username)
  if (!loginUser) {
    alert('User not existed!')
    return null
  }
  if (loginUser.password !== password) {
    alert('Password is not correct!')
    return null
  }
  return loginUser
}

//Submit
const submit = e => {
  e.preventDefault()
  const username = inputUsername.value
  const password = inputPassword.value

  if (!checkUser(username, password)) return false

  const user = checkUser(username, password)
  if (user) {
    saveToStorage('USER', user)
    directToHome()
  }
}

// Event listener
formLogin.addEventListener('submit', submit)
