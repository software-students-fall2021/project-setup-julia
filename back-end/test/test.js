const axios = require('axios')
const assert = require('chai').assert
const backend = require('../app')
const { TRUE } = require('node-sass')

describe('Report tests', function () {
  //unit test to check login function
  it('Check that the login backend return the correct response if credentials are accurate', function () {
    axios
      .post('http://localhost:5000/login', {
        email: 'tazasahar@gmail.com',
        password: 'bobisurUncle',
      })
      .then((res) => {
        assert.strictEqual(res.data, TRUE, 'Login Working')
      })
      .catch(assert.equal(0, 1, 'Error: POST request failed!'))
  })
  //unit test to check User SignUp function
  //need to write test that handles the inverse of this condition
  it('Check that the User Sign Up works given all required parameters', function () {
    axios
      .post('http://localhost:5000/userSignUp', {
        fullName: 'Taza Sahar',
        username: 'tazrbazr',
        email: 'tazasahar@gmail.com',
        password: 'bobisurUncle',
      })
      .then((res) => {
        assert.strictEqual(res.data, TRUE, 'User Sign Up Working')
      })
      .catch(assert.equal(0, 1, 'Error: POST request failed!'))
  })
  //unit test to check User SignUp function
  //need to write test that handles the inverse of this condition
  it('Check that the Vendor Sign Up works given all required parameters', function () {
    axios
      .post('http://localhost:5000/vendorSignUp', {
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
      .then((res) => {
        assert.strictEqual(res.data, TRUE, 'Vendor SignUp Working')
      })
      .catch(assert.equal(0, 1, 'Error: POST request failed!'))
  })

  it('Check that the report backend returns without a proper req parameter.', function () {
    axios
      .post('http://localhost:5000/reportaccount', {
        reportedID: 'test',
      })
      .then((res) => {
        assert.strictEqual(res.data, 'Error: Invalid Report', 'Test failed!')
      })
      .catch(assert.equal(0, 1, 'Error: POST request failed!'))
  })

  it('Check that the report backend returns when provided the correct parameters.', function () {
    axios
      .post('http://localhost:5000/reportaccount', {
        isVendor: true,
        reporterID: 'test1',
        reportedID: 'test2',
      })
      .then((res) => {
        //TODO: remove "test1" and "test2" from database once database is implemented
        assert.strictEqual(
          res.data,
          'Thank you for reporting this vendor. We will investigate their profile and take appropriate action.',
          'Test failed!'
        )
      })
      .catch(assert.equal(0, 1, 'Error: POST request failed!'))

    axios
      .post('http://localhost:5000/reportaccount', {
        isVendor: false,
        reporterID: 'test1',
        reportedID: 'test2',
      })
      .then((res) => {
        //TODO: remove "test1" and "test2" from database once database is implemented
        assert.strictEqual(
          res.data,
          'Thank you for reporting this user. We will investigate their profile and take appropriate action.',
          'Test failed!'
        )
      })
      .catch(assert.equal(0, 1, 'Error: POST request failed!'))
  })

  it('Check that the report backend behaves as expected when a user repeatedly reports the same account.', function () {
    axios
      .post('http://localhost:5000/reportaccount', {
        isVendor: true,
        reporterID: 'test1',
        reportedID: 'test2',
      })
      .catch(assert.equal(0, 1, 'Error: POST request failed!'))

    axios
      .post('http://localhost:5000/reportaccount', {
        isVendor: true,
        reporterID: 'test1',
        reportedID: 'test2',
      })
      .then((res) => {
        //TODO: remove "test1" and "test2" from the database once the database is implemented.
        assert.strictEqual(
          res.data,
          "We're still processing your previous report of this account - please be patient!",
          'Test failed!'
        )
      })
      .catch(assert.equal(0, 1, 'Error: POST request failed!'))
  })
})
