// DOM
// navbar
const navEl = document.getElementById('sidebar')
const navBtn = document.getElementById('sidebar-title')

const toggleNavbar = () => {
    navEl.classList.toggle('active')
}

navBtn.addEventListener('click', toggleNavbar)