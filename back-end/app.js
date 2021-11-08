// import and instantiate express
const express = require('express') // CommonJS import style!
const app = express() // instantiate an Express object

app.use('/static', express.static('public'))
app.use(express.json()) // decode JSON-formatted incoming POST data

app.use(express.urlencoded({ extended: true })) // decode url-encoded incoming POST data

app.get("/Home", (req, res) => {
  res.sendFile("../front-end/src/views/Home.js", {root: __dirname})
});

app.get("/About", (req, res) => {
  res.sendFile("../front-end/src/views/About.js", {root: __dirname})
});

app.get("/Contact", (req, res) => {
  res.sendFile("../front-end/src/views/Contact.js", {root: __dirname})
});

app.post("/Contact", (req, res) => {
  const email = req.body.email
  const text = req.body.text
  console.log("success, %s %s", email, text)
  res.redirect("/Contact")
})

app.get('/UserProfileForm', (req, res) => {
  console.log(req.data)
})

app.get('/', (req, res) => res.send('hello world'))

app.post('/userSignUp', (req, res) => {
  //console.log(req.data)
  const body = {
    title: 'your message',
    heading: 'bob is your dad',
  }
  res.json(body)
})

app.get('/userSignUp', (req, res) => res.send('hello world'))

app.use('/static', express.static('public'))

module.exports = app
