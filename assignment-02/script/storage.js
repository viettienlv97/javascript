'use strict';

// local storage
const saveToStorage = function(key, value) {
    localStorage.setItem(key, JSON.stringify(value))
}
const getFromStorage = function (key, defaultValue) {
    return localStorage.getItem(key) ?? defaultValue
}