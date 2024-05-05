import { getFromStorage, removeFromStorage } from './storage.js'
import { parseUser } from '../models/User.js'
import { fromHomedirectTo } from './helper.js'

let user = parseUser(getFromStorage('USER', null))

// DOM
const loginModal = document.getElementById('login-modal')
const mainContent = document.getElementById('main-content')
const welcomeMessage = document.getElementById('welcome-message')
const btnLogout = document.getElementById('btn-logout')

// Function
const showHomePage = () => {
  if (!user) {
    loginModal.classList.remove('d-none')
    mainContent.classList.add('d-none')
  } else {
    loginModal.classList.add('d-none')
    mainContent.classList.remove('d-none')
    welcomeMessage.textContent = `Welcome ${user.firstName}`
  }
}

// handle logout
const handleLogout = e => {
  console.log(window.location.href)
  if (!user) return

  removeFromStorage('USER')
  user = null
  fromHomedirectTo('login')
}

// Event listenner
btnLogout.addEventListener('click', handleLogout)

// Run fn
showHomePage()
