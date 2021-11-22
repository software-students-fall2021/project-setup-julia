// import and instantiate express
const express = require('express') // CommonJS import style!
const cors = require('cors')

require('dotenv').config({ silent: true })
//const { TRUE } = require('node-sass')
const app = express() // instantiate an Express object
const db = require('./db.js')
const mongoose = require('mongoose')
const User = mongoose.model('User')
const Vendor = mongoose.model('Vendor')

const jwt = require('jsonwebtoken')
const passport = require('passport')
const _ = require('lodash')

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

app.post('/Contact', (req, res) => {
  const email = req.body.email
  const text = req.body.text
  const data = {
    email: email,
    text: text,
  }
  console.log('success, %s %s', email, text)
  res.json(data)
})

app.get('/UserProfileForm', (req, res) => {
  console.log(req.data)
})

app.get('/', (req, res) => res.send('hello world'))

app.post('/UserProfileForm', (req, res) => {
  const body = {
    username: req.body.username,
    password: req.body.password,
  }
  res.json(body)
})

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

app.get('/vendorprofile', (req, res) => {
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
    fullName: req.body.fullName,
    email: req.body.email,
    username: req.body.username,
    password: req.body.password,
  })
  newUser.save((err) => {
    if (err) {
      console.log(err)
    }
  })
  res.json({ success: 'User data added to server' })
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
  console.log(req)

  const username = req.body.username

  const password = req.body.password

  console.log(`${username}, ${password}`)
  console.log(`${req.body}`)

  if (!username || !password) {
    // no username or password received in the POST body... send an error
    res.status(401).json({
      success: false,
      message: `no username or password supplied.`,
      username,
      password,
    })
  }

  // usually this would be a database call, but here we look for a matching user in our mock data
  //error thrown here
  const user = users[_.findIndex(users, { username: username })]
  if (!user) {
    // no user found with this name... send an error
    res
      .status(401)
      .json({ success: false, message: `user not found: ${username}.` })
  }

  // assuming we found the user, check the password is correct
  // we would normally encrypt the password the user submitted to check it against an encrypted copy of the user's password we keep in the database... but here we just compare two plain text versions for simplicity
  else if (req.body.password == user.password) {
    // the password the user entered matches the password in our "database" (mock data in this case)
    // from now on we'll identify the user by the id and the id is the only personalized value that goes into our token
    const payload = { id: user.id } // some data we'll encode into the token
    const token = jwt.sign(payload, jwtOptions.secretOrKey) // create a signed token
    res.json({ success: true, username: user.username, token: token }) // send the token to the client to store
  } else {
    // the password did not match
    res.status(401).json({ success: false, message: 'passwords did not match' })
  }
})

app.post('/reportaccount', (req, res) => {
  if (
    req.hasOwnProperty('body') &&
    req.body.hasOwnProperty('reportedID') &&
    req.body.hasOwnProperty('reporterID')
  ) {
    res.report = req.body.isVendor
      ? 'Thank you for reporting this vendor. We will investigate their profile and take appropriate action.'
      : 'Thank you for reporting this user. We will investigate their profile and take appropriate action.'
    //TODO: Check if this profile has already reported this user. If they have, do not go through with the report.
    //TODO: Add this report to a database of reported profiles.
  } else res.report = 'Error: Invalid Report'
  res.send(res.report)
})

module.exports = app
