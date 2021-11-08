// import and instantiate express
const express = require('express') // CommonJS import style!
const app = express() // instantiate an Express object

app.use('/static', express.static('public'))
app.use(express.json()) // decode JSON-formatted incoming POST data

app.use(express.urlencoded({ extended: true })) // decode url-encoded incoming POST data

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
