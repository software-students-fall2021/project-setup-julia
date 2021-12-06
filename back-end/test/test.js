// const axios = require('axios')
// const chai = require("chai")
// const chaiHttp = require("chai-http")
// const backend = require('../app.js')
// //const { TRUE } = require('node-sass')
// chai.use(chaiHTTP)
// set the app NODE_ENV environment variable to 'test' in case the app is set up to alter its behavior in such case
// in our case, the morgan logging module is turned off when this is set to 'test'
process.env.NODE_ENV = "test"

// include the testing dependencies
const chai = require("chai")
const chaiHttp = require("chai-http")
chai.use(chaiHttp) // use the chai-http middleware to simplify testing routes
const expect = chai.expect // the assertion library in the style using the word 'expect'
const should = chai.should() // the same assertion library in the style using the word 'should'
const assert = require("assert")
// import the server
const app = require("../app")
const { Console } = require("console")

describe('Login Tests', () => {
  //unit test to check login function
  it('Check that the login backend return the correct response if credentials are accurate', done => {
    chai
      .request(app)
      .post('/login')
      .send({
        email: 'tazasahar@gmail.com',
        password: 'bobisurUncle',
      })
      .end(function (err, res) {
        //console.log(res)
        expect(res.text).to.equal("TRUE")
        done()
      })
  })

  //unit test to check User SignUp function
  //need to write test that handles the inverse of this condition
  it('Check that the User Sign Up works given all required parameters', done => {
    chai
      .request(app)
      .post('/userSignUp')
      .send({
        fullName: 'Taza Sahar',
        username: 'tazrbazr',
        email: 'tazasahar@gmail.com',
        password: 'bobisurUncle',
      })
      .end(function (err, res) {
        expect(res.text).to.equal("TRUE")
        done()
      })
  })

  //unit test to check User SignUp function
  //need to write test that handles the inverse of this condition
  it('Check that the Vendor Sign Up works given all required parameters', done => {
    chai
      .request(app)
      .post('/vendorSignUp')
      .send({
        businessName: "Joe's pizza",
        vendorCategory: 'Pizza',
        location: 'Greenwhich Village',
        hours: 'Mon-Friday 9am-9pm',
        menu: 'pizza pizza pizza',
        description: "NY's best pizza",
        fullName: 'Taza Sahar',
        username: 'tazrbazr',
        email: 'tazasahar@gmail.com',
        password: 'bobisurUncle',
      })
      .end(function (err, res) {
        expect(res.text).to.equal("TRUE")
        done()
      })
  })
})

describe('Report Tests', () => {
  it('Check that the report backend returns without a proper req parameter.', done => {
    chai
      .request(app)
      .post('/reportaccount')
      .send({
        reportedID: 'test',
      })
      .end(function (err, res) {
        //console.log(res)
        expect(res.text).to.equal('Error: Invalid Report')
        done()
      })
  })

  it('Check that the report backend returns when provided the correct parameters.', done => {
    chai
      .request(app)
      .post('/reportaccount')
      .send({
        isVendor: true,
        reporterID: 'test1',
        reportedID: 'test2',
      })
      .end(function (err, res) {
        expect(res.text).to.equal('Thank you for reporting this vendor. We will investigate their profile and take appropriate action.')
        //TODO: remove "test1" and "test2" from database once database is implemented
      })
      
    chai
      .request(app)
      .post('/reportaccount')
      .send({
        isVendor: false,
        reporterID: 'test1',
        reportedID: 'test2',
      })
      .end(function (err, res) {
        expect(res.text).to.equal('Thank you for reporting this user. We will investigate their profile and take appropriate action.')
        //TODO: remove "test1" and "test2" from database once database is implemented
        done()
      })
  })

  it('Check that the report backend behaves as expected when a user repeatedly reports the same account.', done => {
    chai
      .request(app)
      .post('/reportaccount')
      .send({
        isVendor: true,
        reporterID: 'test1',
        reportedID: 'test2',
      })
      //.catch(assert.equal(0, 1, 'Error: POST request failed!'))

    chai
      .request(app)
      .post('/reportaccount')
      .send({
        isVendor: true,
        reporterID: 'test1',
        reportedID: 'test2',
      })
      .end(function (err, res) {
        expect(res.text).to.equal("We're still processing your previous report of this account - please be patient!")
        //TODO: remove "test1" and "test2" from the database once the database is implemented.
        done()
      })
  })
})

describe('Contact Form Tests', () => {
  it('Check that the contact form backend works when given required information in fields', done => {
    chai
      .request(app)
      .post('/Contact')
      .send({
            email: 'test@gmail.com',
            text: 'test@gmail.com',
      })
      .end(function (err, res) {
        expect(res.body.text).to.equal("Contact form submit succeeded")
        done()
      })
  })

  it('Check that the contact form backend does not submit when given incomplete or no information in fields', done => {
    chai
      .request(app)
      .post('/Contact')
      .send({
          email: 'a',
          text: '',
      })
      .end(function (err, res) {
        res.should.have.status(401)
        done()
      })
  })
})

describe('User Edit Tests', () => {
  it('Check that the new user passwords must match', done => {
    chai
      .request(app)
      .post('/UserProfileForm')
      .send({
            newPassword1: 'bobby',
            newPassword2: 'bobby',
      })
      .end((err, res) => {
        res.should.have.status(200) // use 'should' to make BDD-style assertions
        done() // resolve the Promise that these tests create so mocha can move on
      })
  })
})

