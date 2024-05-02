'use strict'
export default class User {
  constructor(firstName, lastName, username, password) {
    this.firstName = firstName
    this.lastName = lastName
    this.username = username
    this.password = password
  }

  getUsername() {
    return this.username
  }

  getPassword() {
    return this.password
  }

  getFullName() {
    return `${this.firstName} ${this.lastName}`
  }

  async fetchNew(apiKey, { pageIndex, pageSize, category }) {
    try {
      const res = await fetch(
        `https://newsapi.org/v2/top-headlines?apiKey=${apiKey}&country=us&page=${pageIndex}&pageSize=${pageSize}&category=${category}`
      )
      const data = await res.json()
      if (data.status !== 'ok') throw new Error('Fail to get news!')
      return data
    } catch (error) {
      console.log(error)
      return null
    }
  }
}

export const parseUser = userData => {
  if (!userData) return null
  const user = new User(
    userData.firstName,
    userData.lastName,
    userData.username,
    userData.password
  )

  return user
}
