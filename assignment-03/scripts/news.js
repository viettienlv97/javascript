import { parseUser } from '../models/User'
import { directTo } from './helper'
import { getFromStorage } from './storage'

// Data
const user = parseUser(getFromStorage('USER', null))
let totalResults = null
const newsOptions = {
  category: 'science',
  pageSize: 5,
  pageIndex: 1
}
const apiKey = '10937ebd2df6449e9897eda9d5c30c05'

// DOM
const newsContainer = document.getElementById('news-container')
const paginationBtns = document.getElementById('pagination-btns')

// Post template
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
// Pagination template
const preBtnTemplate = () => {
  return `
  <li class="page-item">
    <button class="page-link btn" id="btn-prev">
      Previous
    </button>
  </li>
`
}
const nextBtnTemplate = () => {
  return `
  <li class="page-item">
    <button class="page-link btn" id="btn-next">
      Next
    </button>
  </li>
  `
}
const numberBtn = num => {
  return `
  <li class="page-item">
    <button class="page-link btn ${
      newsOptions.pageIndex === num ? 'fw-bold bg-gray disabled' : ''
    }" id="page-num-${num}">${num}</button>
  </li>
  `
}

// Bind template for pagination
const bindPagination = () => {
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
// Bind template for news
const bindData = async () => {
  if (!user) {
    directTo('login')
    return
  }

  const data = await user.fetchNew(apiKey, newsOptions)
  if (!data) return

  totalResults = data.totalResults
  let templates = ''
  data.articles.forEach(post => {
    templates += postTemplate(post)
  })
  newsContainer.innerHTML = templates
  bindPagination()
}

// Handle change page
const handleChangePage = pageIndex => {
  newsOptions.pageIndex = pageIndex
  bindData()
}

// Add event listener
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

bindData()
