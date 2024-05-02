// Asynchronous Javascript And XML: Allows us to communicate with
// remote web servers in an asynchronous way. With AJAX calls, we
// can request data from web servers dynamically.

const request = new XMLHttpRequest()
console.log(request)
request.open("GET", "https://restcountries.com/v3.1/name/vietnam")
request.send()
request.addEventListener("load", function () {
  console.log(JSON.parse(this.responseText))
})
