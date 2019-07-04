const https = require("https")
const axios = require("axios")
const fetch = require("node-fetch")
const requestPromise = require("request-promise")
const got = require("got")
const simpleGet = require("simple-get")

https.get("https://jsonplaceholder.typicode.com/todos/1", function(response) {
  response.setEncoding("utf8")
  response.on("data", console.log)
  response.on("error", console.error)
}).on("error", console.error)

axios.get("https://jsonplaceholder.typicode.com/todos/1")
  .then(function(response) {
    console.log(response.data)
  })
  .catch(function(error) {
    console.log(error)
  })

fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then(function(response) {
    return response.json()
  }).then(function(data) {
    console.log(data)
  }).catch(function(error) {
    console.log(error)
  })

requestPromise({uri: "https://jsonplaceholder.typicode.com/todos/1", headers: { "User-Agent": "Request-Promise" }, json: true})
  .then(function(response) {
    console.log(response)
  })
  .catch(function(error) {
    console.log(error)
  })

got("https://jsonplaceholder.typicode.com/todos/1", { json: true })
  .then(function(response) {
    console.log(response.body)
  })
  .catch(function(error) {
    console.log(error)
  })

simpleGet("https://jsonplaceholder.typicode.com/todos/1", function(error, response) {
  if (error) {
    console.log(error)
  } else {
    response.pipe(process.stdout)
  }
})
