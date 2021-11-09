const axios = require('axios')
const assert = require('chai').assert;
const backend = require('../app');



describe('Report tests', function(){

    it('Check that the report backend returns without a proper req parameter.', function(){
        axios.post( 'http://localhost:5000/reportaccount', {
            reportedID: "test"
        })
        .then((res) => {
            assert.strictEqual(res.data, "Error: Invalid Report", "Test failed!")
        }).catch(
            assert.equal(0, 1, "Error: POST request failed!")
        )
    });

    it('Check that the report backend returns when provided the correct parameters.', function(){
        axios.post( 'http://localhost:5000/reportaccount', {
            isVendor: true,
            reporterID: "test1",
            reportedID: "test2"
        })
        .then((res) => {
            //TODO: remove "test1" and "test2" from database once database is implemented
            assert.strictEqual(res.data, "Thank you for reporting this vendor. We will investigate their profile and take appropriate action.", "Test failed!")
        }).catch(
            assert.equal(0, 1, "Error: POST request failed!")
        )

        axios.post( 'http://localhost:5000/reportaccount', {
            isVendor: false,
            reporterID: "test1",
            reportedID: "test2"
        })
        .then((res) => {
            //TODO: remove "test1" and "test2" from database once database is implemented
            assert.strictEqual(res.data, "Thank you for reporting this user. We will investigate their profile and take appropriate action.", "Test failed!")
        }).catch(
            assert.equal(0, 1, "Error: POST request failed!")
        )
    });

    it('Check that the report backend behaves as expected when a user repeatedly reports the same account.', function(){
        axios.post( 'http://localhost:5000/reportaccount', {
            isVendor: true,
            reporterID: "test1",
            reportedID: "test2"
        }).catch(
            assert.equal(0, 1, "Error: POST request failed!")
        )

        axios.post( 'http://localhost:5000/reportaccount', {
            isVendor: true,
            reporterID: "test1",
            reportedID: "test2"
        })
        .then((res) => {
            //TODO: remove "test1" and "test2" from the database once the database is implemented.
            assert.strictEqual(res.data, "We're still processing your previous report of this account - please be patient!", "Test failed!")
        }).catch(
            assert.equal(0, 1, "Error: POST request failed!")
        )
    });
})