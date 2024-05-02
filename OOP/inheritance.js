"use strict"

// Tính kế thừa

// Parent class
class User {
  user
  password
  email

  login(password) {
    // Login logic
  }

  sendMessage(str) {
    // Sending logic
  }
}

// Child class
// Child class extends parent class
class Admin {
  user
  password
  email
  permissions

  login(password) {
    // Login logic
  }
  sendMessage(str) {
    // Sending logic
  }
  deleteUser(user) {
    // Deleting logic
  }
}
