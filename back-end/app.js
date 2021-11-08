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

app.get('/reportaccount', (req, res) => {
  if(req.hasOwnProperty('query') && req.query.hasOwnProperty('reportedID') && req.query.hasOwnProperty('reporterID')) {
    console.log("Reporting middleware triggered!")
    res.report = (req.query.isVendor ? "Thank you for reporting this vendor. We will investigate their profile and take appropriate action." : 
                                   "Thank you for reporting this user. We will investigate their profile and take appropriate action.")
//TODO: Check if this profile has already reported this user. If they have, do not go through with the report.
 //TODO: Add this report to a database of reported profiles.
 }
  else
    res.report = "Error: Invalid Report"
res.send(res.report)
})

module.exports = app
