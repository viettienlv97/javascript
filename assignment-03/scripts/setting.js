'use strict'
import { getFromStorage, saveToStorage } from './storage'
import { parseUser } from '../models/User'
import { directTo } from './helper'

// Data
const user = parseUser(getFromStorage('USER', null))
if (!user) directTo('login')
const userArr = getFromStorage('USER_ARRAY', [])

// DOM
const formSetting = document.getElementById('form-setting')
const inputCategory = document.getElementById('input-category')
const inputPageSize = document.getElementById('input-page-size')

// Bind setting from user
;(bindSetting = () => {
  inputCategory.value = user.category
  inputPageSize.value = user.pageSize
})()

// save user setting
const saveUserSetting = () => {
  user.pageSize = Number(inputPageSize.value)
  user.category = inputCategory.value

  const index = userArr.findIndex(u => u.username === user.username)
  userArr[index] = user
  saveToStorage('USER', user)
  saveToStorage('USER_ARRAY', userArr)
  alert('Saved')
}

// Handle submit setting
const handleSubmit = e => {
  e.preventDefault()
  saveUserSetting()
}

// Event listener
formSetting.addEventListener('submit', handleSubmit)
