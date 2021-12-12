require('dotenv').config({ silent: true }) // load environmental variables from a hidden file named .env

const passportJWT = require('passport-jwt')

const ExtractJwt = passportJWT.ExtractJwt

const JwtStrategy = passportJWT.Strategy

const _ = require("lodash") // the lodash module has some convenience functions for arrays that we use to sift through our mock user data... you don't need this if using a real database with user info

const mongoose = require('mongoose')
const uri = process.env.MONGOOSE_URI

mongoose.connect(uri)
// set up some JWT authentication options
let jwtOptions = {}

jwtOptions.jwtFromRequest = ExtractJwt.fromAuthHeaderWithScheme('jwt') // look for the Authorization request header

jwtOptions.secretOrKey = process.env.JWT_SECRET // an arbitrary string used during encryption - see the .env file
// console.log(jwtOptions)
// debug to make sure the secret from the .env file is loaded correctly

// passport can work with many authentication systems... here we are setting some middleware code for using JWT that we'll pass to passport to use

const jwtStrategy = new JwtStrategy(jwtOptions, function (jwt_payload, next) {
  
  // console.log("JWT payload received", jwt_payload) // debugging

  // load up some mock user data in an array... we only need this because we're mocking the data from a database
  const User = mongoose.model('User')
  const Vendor = mongoose.model('Vendor')
  // try to find a matching user or vendor in our database
  

  User.findById( jwt_payload.id , 
    function (err, user) {
      if (err){
        console.log(err)
        next(null,false)
      }
      else if (user) {
        console.log(`ID: ${jwt_payload.id}, user name: ${user.username}`)
        next(null, user, "User")
      }
      else{
        Vendor.findById(jwt_payload.id, 
          function(err, vendor){
            if (err){
              console.log(err)
              next(null,false)
            }
            else if (vendor){
              console.log(`ID: ${jwt_payload.id}, vendor name: ${vendor.username}`)
              next(null, vendor,"Vendor")
            }
          }
        )
      }
    }
  )

    

})

module.exports = {
  jwtOptions,
  jwtStrategy,
}
