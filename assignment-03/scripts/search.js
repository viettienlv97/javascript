'use strict'

import { parseUser } from '../models/User'
import { directTo } from './helper'
import { getFromStorage } from './storage'

// Data
const user = parseUser(getFromStorage('USER', null))
if (!user) directTo('login')

const apiKey = 'f79c1631e40447bbb6df1ecdc34f11e1'
let totalResults = 0
let query = ''
const newsOptions = {
  pageSize: user.pageSize ?? 10,
  pageIndex: 1
}

// DOM
const formSearch = document.getElementById('form-search')
const inputSearch = document.getElementById('input-query')
const newsContainer = document.getElementById('news-container')
const paginationBtns = document.getElementById('pagination-btns')

// Template
// New template
const postTemplate = data => {
  return `
  <div class="card flex-row flex-wrap">
  <div class="card mb-3" style="">
    <div class="row no-gutters">
      <div class="col-md-4">
        <img
          src=${data.urlToImage}
          class="card-img"
          alt=${data.title}
        />
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">
            ${data.title}
          </h5>
          <p class="card-text">
            ${data.description}
          </p>
          <a
            href=${data.url}
            class="btn btn-primary"
            >View</a
          >
        </div>
      </div>
    </div>
  </div>
</div>
  `
}
// Prev button template
const preBtnTemplate = () => {
  return `
  <li class="page-item">
    <button class="page-link btn" id="btn-prev">
      Previous
    </button>
  </li>
`
}
// Next button template
const nextBtnTemplate = () => {
  return `
  <li class="page-item">
    <button class="page-link btn" id="btn-next">
      Next
    </button>
  </li>
  `
}
// Number button template
const numberBtn = num => {
  return `
  <li class="page-item">
    <button class="page-link btn ${
      newsOptions.pageIndex === num ? 'fw-bold bg-gray disabled' : ''
    }" id="page-num-${num}">${num}</button>
  </li>
  `
}

// Bind template
const bindPagination = () => {
  if (totalResults === 0) {
    paginationBtns.innerHTML = null
    return
  }
  const last = Math.floor(totalResults / newsOptions.pageSize)
  let templates = ''
  if (newsOptions.pageIndex !== 1) {
    templates += preBtnTemplate()
  }
  if (newsOptions.pageIndex > 4) templates += numberBtn('...')
  for (let i = 1; i <= last; i++) {
    if (newsOptions.pageIndex - i < 4 && i - newsOptions.pageIndex < 4)
      templates += numberBtn(i)
  }
  if (newsOptions.pageIndex <= last - 4) templates += numberBtn('...')
  if (last !== newsOptions.pageIndex) templates += nextBtnTemplate()
  paginationBtns.innerHTML = templates
  addClickEventPagination(last)
}
const bindNews = data => {
  totalResults = data.totalResults
  let templates = ''
  data.articles.forEach(post => {
    templates += postTemplate(post)
  })
  newsContainer.innerHTML = templates
}

// Search news
const search = async () => {
  const data = await user.searchNews(apiKey, query, newsOptions)
  if (!data) return

  bindNews(data)
  bindPagination()
}

// Handle submit
const handleSubmit = e => {
  e.preventDefault()
  newsOptions.pageIndex = 1
  query = inputSearch.value
  search()
}
// Handle change page
const handleChangePage = pageIndex => {
  newsOptions.pageIndex = pageIndex
  search()
}

// Event listener
const addClickEventPagination = last => {
  for (let i = 1; i <= last; i++) {
    let btn = document.getElementById('page-num-' + i)
    if (btn) btn.addEventListener('click', e => handleChangePage(i))
  }
  const prev = document.getElementById('btn-prev')
  const next = document.getElementById('btn-next')
  prev?.addEventListener('click', e =>
    handleChangePage(newsOptions.pageIndex - 1)
  )
  next?.addEventListener('click', e =>
    handleChangePage(newsOptions.pageIndex + 1)
  )
}
formSearch.addEventListener('submit', handleSubmit)
