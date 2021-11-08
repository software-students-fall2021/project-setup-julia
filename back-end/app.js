// import and instantiate express
const express = require('express') // CommonJS import style!
const cors = require('cors')
const app = express() // instantiate an Express object

app.use(cors());
app.use('/static', express.static('public'))
app.use(express.json()) // decode JSON-formatted incoming POST data
app.use(express.urlencoded({ extended: true })) // decode url-encoded incoming POST data

app.get('/products/:id', function (req, res, next) {
  res.json({msg: 'This is CORS-enabled for all origins!'})
})

app.listen(80, function () {
  console.log('CORS-enabled web server listening on port 80')
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

app.post('/reportaccount', (req, res) => {
  if(req.hasOwnProperty('body') && req.body.hasOwnProperty('reportedID') && req.body.hasOwnProperty('reporterID')) {
    res.report = (req.body.isVendor ? "Thank you for reporting this vendor. We will investigate their profile and take appropriate action." : 
                                   "Thank you for reporting this user. We will investigate their profile and take appropriate action.")
 //TODO: Check if this profile has already reported this user. If they have, do not go through with the report.
 //TODO: Add this report to a database of reported profiles.
 }
  else
    res.report = "Error: Invalid Report"
res.send(res.report)
})

module.exports = app
