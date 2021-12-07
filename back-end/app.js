require('./db');
// import and instantiate express
const express = require('express') // CommonJS import style!
const cors = require('cors')
const morgan = require('morgan')
require('dotenv').config({ silent: true })
//const { TRUE } = require('node-sass')


 
const app = express() // instantiate an Express object
app.use(morgan('dev'));

const db = require('./db.js')
const mongoose = require('mongoose')
const uri =
  'mongodb+srv://whendorteam:Qy4aTtH4KA2AIOK3@whendor.ds7ji.mongodb.net/Whendor?retryWrites=true&w=majority'

mongoose.connect(uri)

const User = mongoose.model('User')
const Vendor = mongoose.model('Vendor')
const Report = mongoose.model('Report')

const Contact_Message = mongoose.model("Contact_Message");

const jwt = require('jsonwebtoken')
const passport = require('passport')
const _ = require('lodash')
app.use(passport.initialize()) // tell express to use passport middleware
const users = require('./user_data.js')

const { jwtOptions, jwtStrategy } = require('./jwt-config.js') // import setup options for using JWT in passport
passport.use(jwtStrategy)

app.use(cors())

//this ensures we don't get cors errors
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  next()
})

app.use('/static', express.static('public'))
app.use(express.json()) // decode JSON-formatted incoming POST data
app.use(express.urlencoded({ extended: true })) // decode url-encoded incoming POST data

app.get('/products/:id', function (req, res, next) {
  res.json({ msg: 'This is CORS-enabled for all origins!' })
})

app.listen(80, function () {
  console.log('CORS-enabled web server listening on port 80')
})

app.post("/Contact", (req, res) => {
  const email = req.body.email
  const message = req.body.text
  if (!email || !message){
    res
    .status(401)
    .json({ success: false, text: "email and message cannot be empty" })
  }
  else{
    const newContact = new Contact_Message({
      email: email,
      message: message,
    })
    res.json({success: true, text: "Contact form submit succeeded", form: newContact})
  }
});



app.get('/user-profile', 
passport.authenticate("jwt", {session: false}), 
(req, res) => {
    res.json({
      success: true,
      user: {
        id: req.user._id,
        username: req.user.username,
      },
      message:
        "logged in - valid JWT token",
    })
  }
)
    

app.get('/', (req, res) => res.send('hello world'))

app.post('/user-profile-form', (req, res) => {
  const body = {
    username: req.body.username,
    password: req.body.password,
    newPassword : req.body.newPassword1
  };
  res.json(body);
});

app.post('/VendorProfileForm', (req, res) => {
  const body = {
    businessName: req.body.businessName,
    vendorCategory: req.body.vendorCategory,
    location: req.body.location,
    hours: req.body.hours,
    menu: req.body.menu,
    description: req.body.description,
  }
  //once we have our DB ready will connect this
  res.json(body)
})

app.get("/minibio", (req, res) => {
  const minibio = {
    name: "Bob",
    location: "Main Street & Roosevelt Avenue",
    hours: "Monday-Friday 9am-5pm",
    contactinfo: "boband@gmail.com",
  };
  res.json(minibio);
});

app.get("/vendorprofile", (req, res) => {
  const sampleProfile = {
    name: "Michael's Meringue Menagerie",
    category: 'Food',
    subcategories: ['Snacks', 'European'],
    location: 'W 4th St across from Starbucks',
    hours: 'Saturday-Sunday 12pm-5pm',
    menu: 'Vanilla Meringue box of 10 - $5',
    description: "Michael's homemade meringues!",
  }
  res.json(sampleProfile)
})

// this will handle the post requests to Sign our user up
app.post('/userSignUp', (req, res) => {
  const newUser = new User({
    fullname: req.body.fullName,
    email: req.body.email,
    username: req.body.username,
    password: req.body.password,
  })
  newUser.save((err) => {
    if (err) {
      console.log(err)
    } else {
      res.json({ success: 'User data added to server' })
    }
  })
})

app.post('/vendorSignUp', (req, res) => {
  //console.log(req)
  const newVendor = new Vendor({
    businessName: req.body.businessName,
    vendorCategory: req.body.vendorCategory,
    location: req.body.location,
    hours: req.body.hours,
    menu: req.body.menu,
    description: req.body.description,
    fullName: req.body.fullName,
    email: req.body.email,
    username: req.body.username,
    password: req.body.password,
  })

  newVendor.save((err) => {
    if (err) {
      console.log(err)
    } else {
      res.json({ success: 'Vendor data added to server' })
    }
  })
})

// a route to handle a login attempt
app.post('/login', (req, res) => {
  //console.log(req)

  //get the request and assign them to variables
  const username = req.body.email
  const password = req.body.password

  //console.log(`${req.body}`)

  if (!username || !password) {
    // no username or password received in the POST body... send an error
    res.json({
      success: false,
      message: 'no username or password provided',
    })
  } else {
    User.findOne({ username: username }, function (err, user) {
      if (err) {
        res.json({
          success: false,
          message: 'Error has occured',
        })
      } else if (!user) {
        res.json({
          success: false,
          message: 'User not found',
        })
      } else if (user.password == password) {
        const payload = { id: user.id } // some data we'll encode into the token
        const token = jwt.sign(payload, jwtOptions.secretOrKey) // create a signed token

        res.json({ success: true, username: user.username, token: token })
      } else {
        res.json({ success: false, message: 'wrong password' })
      }
    })
  }
})

app.post('/reportaccount', (req, res) => {
  let reportMsg = "Error: Invalid Report"
  if (
    req.hasOwnProperty('body') &&
    req.body.hasOwnProperty('reportedID') &&
    req.body.hasOwnProperty('reporterID')
  ) {
  Report.findOne({ businessName: req.body.reportedID }, function (error, found) {
    if (error) {
      console.log("We've got an error!")
      res.send ({ report: "Invalid Report"})
    } else if (found === null) {
      const newReport = new Report({
        businessName: req.body.reportedID,
        businessIsVendor: req.body.isVendor,
        reporterNames: [req.body.reporerID],
        reportCount: 1,
    })
      newReport.save();
      console.log("New report created!")
      res.send({ report: req.body.isVendor
      ? 'Thank you for reporting this vendor. We will investigate their profile and take appropriate action.'
      : 'Thank you for reporting this user. We will investigate their profile and take appropriate action.'})
    } else if (typeof found.reporterNames.find(element => element === req.body.reporterID) !== 'undefined') {
      console.log("Repeat report encountered!")
      res.send({ report: "We're still processing your previous report of this account - please be patient!" })
    } else {
      found.reporterNames.push(req.body.reporterID)
      found.reportCount += 1
      found.save()
      console.log("New report on existing account made!")
      res.send({ report: req.body.isVendor
      ? 'Thank you for reporting this vendor. We will investigate their profile and take appropriate action.'
      : 'Thank you for reporting this user. We will investigate their profile and take appropriate action.' })
      }
    })
  } 
})

module.exports = app;
