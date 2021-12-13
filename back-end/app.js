require('./db')
// import and instantiate express
const express = require('express') // CommonJS import style!
const cors = require('cors')
const morgan = require('morgan')
require('dotenv').config({ silent: true })
//const { TRUE } = require('node-sass')

const app = express() // instantiate an Express object
app.use(morgan('dev'))

const db = require('./db.js')
const mongoose = require('mongoose')
const uri = process.env.MONGOOSE_URI
mongoose.connect(uri)

const User = mongoose.model('User')
const Vendor = mongoose.model('Vendor')
const Report = mongoose.model('Report')

const Contact_Message = mongoose.model('Contact_Message')

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

app.post('/Contact', (req, res) => {
  const email = req.body.email
  const message = req.body.text
  if (!email || !message) {
    res
      .status(401)
      .json({ success: false, text: 'email and message cannot be empty' })
  } else {
    const newContact = new Contact_Message({
      email: email,
      message: message,
    })
    res.json({
      success: true,
      text: 'Contact form submit succeeded',
      form: newContact,
    })
  }
})

app.get(
  '/user-profile',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    console.log(req)
    if (req.authInfo != "User"){
      res.json({
        success : false,
        user : null,
        message : "You must be logged in as a user to access this page."
      })
    }
    else{
      res.json({
        success: true,
        user: {
          id: req.user._id,
          email: req.user.email,
          fullname: req.user.fullname,
          username: req.user.username,
          password: req.user.password
        },
        message: 'logged in - valid JWT token',
      })
    }
  }
)

app.get('/', (req, res) => res.send('hello world'))

app.post('/user-profile-form', (req, res) => {
  const newUser = {
    username: req.body.username,
    fullname: req.body.fullname,
    email: req.body.email,
    password: req.body.newPassword,
  }
  User.findByIdAndUpdate(req.body.id,
    newUser, {new:true},
    function(err, user){
      if (err){
        res.json({
          success:false,
          user:null,
          message: "unable to update user information"
        })
      }
      else if (user){
        res.json({
          success: true,
          user : user,
          message : "successfully updated user information"
        })
      }
    })
})

app.post('/VendorProfileForm', (req, res) => {

  const newVendor = {
    id: req.body.id,
    businessName: req.body.businessName,
    vendorCategory: req.body.vendorCategory,
    vendorSubcategory: req.body.vendorSubcategory,
    location: req.body.location,
    hours: req.body.hours,
    menu: req.body.menu,
    description: req.body.description
  }

  Vendor.findByIdAndUpdate(req.body.id,
    newVendor,
    function(err, vendor){
      if (err){
        res.json({
          success:false,
          vendor: null,
          message: err
        })
      }
      else if (vendor){
        res.json({
          success:true,
          vendor: newVendor,
          message: "successfully updated vendor profile"
        })
      }
    }
  )
})

app.get("/minibio/:subcat", (req, res) => {
  if(req.params.subcat==="fastFood")
  {
    Vendor.find({vendorSubcategory: ['Fast Food']}, {fullName: 1, location: 1, hours: 1, email: 1}, function(err, vendor){
      if(err)
      {
        console.log(err)
      }
      else
      {
        res.json(vendor)
      }
    }).limit(4)
  }
  else if(req.params.subcat==="latinAmerican")
  {
    Vendor.find({vendorSubcategory: ['Latin American']}, {fullName: 1, location: 1, hours: 1, email: 1}, function(err, vendor){
      if(err)
      {
        console.log(err)
      }
      else
      {
        res.json(vendor)
      }
    }).limit(4)
  }
  else
  {
    Vendor.find({vendorSubcategory: [req.params.subcat]}, {fullName: 1, location: 1, hours: 1, email: 1}, function(err, vendor){
      if(err)
      {
        console.log(err)
      }
      else
      {
        res.json(vendor)
      }
    }).limit(4)
  }
  /*Vendor.find({vendorSubcategory: [req.params.subcat]}, {fullName: 1, location: 1, hours: 1, email: 1}, function(err, vendor){
    if(err)
    {
      console.log(err)
    }
    else
    {
      res.json(vendor)
    }
  }).limit(4)*/
});

app.get('/vendor-profile', 
  passport.authenticate("jwt", {session: false}), 
  (req, res) => {
    if (req.authInfo != "Vendor"){
      res.json({
        success : false,
        vendor : null,
        message : "Logged in as User - Could not load vendor from database"
      })
    }
    else{
      res.json({
        success: true,
        vendor: {
          id: req.user.id,
          businessName : req.user.businessName,
          vendorCategory : req.user.vendorCategory,
          vendorSubcategory: req.user.vendorSubcategory,
          location: req.user.location,
          hours: req.user.hours,
          menu: req.user.menu,
          description:req.user.description,
        },
        message:
          "logged in - valid JWT token",
      })
    }
  }
)

app.get("/samplevendorprofile", (req, res) => {
  const sampleProfile = {
    businessName: "Michael's Meringue Menagerie",
    vendorCategory: 'Food',
    vendorSubcategory: ['Snacks', 'European'],
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
    vendorSubcategory: req.body.vendorSubcategory,
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

// a route to handle a users login attempt
app.post('/userLogin', (req, res) => {
  //console.log(req)

  //get the request and assign them to variables
  const username = req.body.username
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
// a route to handle a vendors login attempt
app.post('/vendorLogin', (req, res) => {
  //console.log(req)

  //get the request and assign them to variables
  const username = req.body.username
  const password = req.body.password

  //console.log(`${req.body}`)

  if (!username || !password) {
    // no username or password received in the POST body... send an error
    res.json({
      success: false,
      message: 'no username or password provided',
    })
  } else {
    Vendor.findOne({ username: username }, function (err, vendor) {
      if (err) {
        res.json({
          success: false,
          message: 'Error has occured',
        })
      } else if (!vendor) {
        res.json({
          success: false,
          message: 'Vendor not found',
        })
      } else if (vendor.password == password) {
        const payload = { id: vendor.id } // some data we'll encode into the token
        const token = jwt.sign(payload, jwtOptions.secretOrKey) // create a signed token

        res.json({ success: true, username: vendor.username, token: token })
      } else {
        res.json({ success: false, message: 'wrong password' })
      }
    })
  }
})

app.post('/reportaccount', (req, res) => {
  let reportMsg = 'Error: Invalid Report'
  console.log(req)
  if (
    req.hasOwnProperty('body') &&
    req.body.hasOwnProperty('reportedID') &&
    req.body.hasOwnProperty('reporterID')
  ) {
    Report.findOne(
      { businessName: req.body.reportedID },
      function (error, found) {
        if (error) {
          console.log("We've got an error!")
          res.send({ report: 'Invalid Report' })
        } else if (found === null) {
          const newReport = new Report({
            businessName: req.body.reportedID,
            businessIsVendor: req.body.isVendor,
            reporterNames: [req.body.reporterID],
            reportCount: 1,
          })
          newReport.save()
          console.log('New report created!')
          res.send({
            report: req.body.isVendor
              ? 'Thank you for reporting this vendor. We will investigate their profile and take appropriate action.'
              : 'Thank you for reporting this user. We will investigate their profile and take appropriate action.',
          })
        } else if (
          typeof found.reporterNames.find(
            (element) => element === req.body.reporterID
          ) !== 'undefined'
        ) {
          console.log('Repeat report encountered!')
          res.send({
            report:
              "We're still processing your previous report of this account - please be patient!",
          })
        } else {
          found.reporterNames.push(req.body.reporterID)
          found.reportCount += 1
          found.save()
          console.log('New report on existing account made!')
          res.send({
            report: req.body.isVendor
              ? 'Thank you for reporting this vendor. We will investigate their profile and take appropriate action.'
              : 'Thank you for reporting this user. We will investigate their profile and take appropriate action.',
          })
        }
      }
    )
  }
})

module.exports = app
