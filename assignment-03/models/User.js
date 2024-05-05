'use strict'
export default class User {
  constructor(
    firstName,
    lastName,
    username,
    password,
    pageSize = 5,
    category = 'general'
  ) {
    this.firstName = firstName
    this.lastName = lastName
    this.username = username
    this.password = password
    this.pageSize = pageSize
    this.category = category
  }
  // fetch news api
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
  // fetch news api with search
  async searchNews(apiKey, search, { pageIndex, pageSize }) {
    try {
      const res = await fetch(
        `https://newsapi.org/v2/everything?q=${search}&apiKey=${apiKey}&page=${pageIndex}&pageSize=${pageSize}`
      )
      const data = await res.json()
      if (data.status !== 'ok') throw new Error('Fail to get news')
      return data
    } catch (error) {
      console.log(error)
      return null
    }
  }
}

// parse user from object
export const parseUser = userData => {
  if (!userData) return null
  const user = new User(
    userData.firstName,
    userData.lastName,
    userData.username,
    userData.password,
    userData.pageSize,
    userData.category
  )

  return user
}
