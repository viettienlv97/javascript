// DOM
const navEl = document.getElementById("sidebar")
const navBtn = document.getElementById("sidebar-title")

// Toggle Navbar
const toggleNavbar = () => {
  navEl.classList.toggle("active")
}

// Add event listener
navBtn.addEventListener("click", toggleNavbar)
