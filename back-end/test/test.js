const axios = require('axios')
const assert = require('chai').assert;
const backend = require('../app');



describe('Report tests', function(){

    it('Check that the report backend returns without a proper req parameter.', function(){
        axios.post( 'localhost:5000/reportaccount', {
            reportedID: "test"
        })
        .then((res) => {
            assert.strictEqual(res.message, "Error: Invalid Report", "Test failed!")
        })
    });

    it('Check that the report backend returns when provided the correct parameters.', function(){
        axios.post( 'localhost:5000/reportaccount', {
            isVendor: true,
            reporterID: "test1",
            reportedID: "test2"
        })
        .then((res) => {
            assert.strictEqual(res.message, "Thank you for reporting this vendor. We will investigate their profile and take appropriate action.", "Test failed!")
        })

        axios.post( 'localhost:5000/reportaccount', {
            isVendor: false,
            reporterID: "test1",
            reportedID: "test2"
        })
        .then((res) => {
            assert.strictEqual(res.message, "Thank you for reporting this user. We will investigate their profile and take appropriate action.", "Test failed!")
        })
    });
})