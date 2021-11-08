// import and instantiate express
const express = require('express') // CommonJS import style!
const cors_proxy = require('cors-anywhere');
//const cors = require('cors')
const app = express() // instantiate an Express object

//app.use(cors())
//app.options('*', cors());
app.use('/static', express.static('public'))
app.use(express.json()) // decode JSON-formatted incoming POST data

app.use(express.urlencoded({ extended: true })) // decode url-encoded incoming POST data

// Listen on a specific host via the HOST environment variable
const host = process.env.HOST || '0.0.0.0';
// Listen on a specific port via the PORT environment variable
const port = process.env.PORT || 5000;

cors_proxy.createServer({
    originWhitelist: [], // Allow all origins
    requireHeader: ['origin', 'x-requested-with'],
    removeHeaders: ['cookie', 'cookie2']
}).listen(port, host, function() {
    console.log('Running CORS Anywhere on ' + host + ':' + port);
});

app.use(function(req, res, next) {
  // res.header("Access-Control-Allow-Origin", "*");
  // res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
  res.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");
  next();
  });

// var whitelist = ['http://localhost', 'https://localhost', 'localhost']
// var corsOptions = {
//   origin: function (origin, callback) {
//     if (whitelist.indexOf(origin) !== -1) {
//       callback(null, true)
//     } else {
//       callback(new Error('Not allowed by CORS'))
//     }
//   }
// }

// app.get('/reportaccount', cors(corsOptions), function (req, res, next) {
//   res.json({msg: 'This is CORS-enabled for all origins!'})
// })

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

app.get('/reportaccount', (req, res) => {
  if(req.hasOwnProperty('query') && req.query.hasOwnProperty('reportedID') && req.query.hasOwnProperty('reporterID')) {
    console.log("Reporting middleware triggered!")
    res.report = (req.query.isVendor === 'true' ? "Thank you for reporting this vendor. We will investigate their profile and take appropriate action." : 
                                   "Thank you for reporting this user. We will investigate their profile and take appropriate action.")
//TODO: Check if this profile has already reported this user. If they have, do not go through with the report.
 //TODO: Add this report to a database of reported profiles.
 }
  else
    res.report = "Error: Invalid Report"
res.send(res.report)
})

module.exports = app
