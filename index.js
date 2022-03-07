const express = require('express')
const app = express()
const ejs = require('ejs')
app.set("view engine", "ejs")

app.get("/", (req, res) => {
  res.render("index")
})

app.get("/example", (req, res) => {
  res.render("example", {
    name: "john"
  })
})

app.get("*", (req, res) => {
  res.status(404).send("Error: 404. This page does not exist.")
})

app.listen(3000, () => console.log("Website Ready!"))
