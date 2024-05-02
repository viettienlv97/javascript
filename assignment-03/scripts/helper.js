export const directTo = href => {
  window.location.href = `../pages/${href}.html`
}

export const fromHomedirectTo = href => {
  console.log(window.location.href)
  window.location.href = `pages/${href}.html`
}

export const directToHome = () => {
  window.location.href = `../index.html`
}
