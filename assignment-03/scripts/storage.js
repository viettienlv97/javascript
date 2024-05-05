// local storage
export const saveToStorage = function (key, value) {
  localStorage.setItem(key, JSON.stringify(value))
}
export const getFromStorage = function (key, defaultValue) {
  return JSON.parse(localStorage.getItem(key)) ?? defaultValue
}
export const removeFromStorage = function (key) {
  localStorage.removeItem(key)
}
