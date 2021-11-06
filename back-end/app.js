// import and instantiate express
const express = require('express') // CommonJS import style!

// const {
//   default: AvAddToQueue,
// } = require("material-ui/svg-icons/av/add-to-queue");

const app = express() // instantiate an Express object

const port = 5000

app.get('/', (req, res) => res.send('Lorem ipsum'))

app.listen(port, () => console.log(`app listening on port ${port}!`))

// app.use('/static', express.static('public'))

// app.get('/home', (req, res) => {})

// app.get('/about', (req, res) => {})

// app.get('/contact', (req, res) => {})

// app.get('/login', (req, res) => {})

// app.get('/usersignup', (req, res) => {})

// app.get('/userprofile', (req, res) => {})

// app.get('/userfollowing', (req, res) => {})

// app.get('/searchresults', (req, res) => {})

// app.get('/subcategories', (req, res) => {})

// app.get('/vendors', (req, res) => {})

// app.get('/vendorprofile', (req, res) => {})

// app.get('/vendorsignup', (req, res) => {})

app.get("/Subcategories#ReportVendor", (req, res) => {
  //TODO: Check if this profile has already reported this user. If they have, do not go through with the report.
  let message = ReportMessage(req.isVendor)
  //TODO: Add this report to a database of reported profiles.
  res.send(message)
});

app.get("/UserProfile#ReportProfile", (req, res) => {
  //TODO: Check if this profile has already reported this user. If they have, do not go through with the report.
  let message = ReportMessage(req.isVendor)
  //TODO: Add this report to a database of reported profiles.
  res.send(message)
});

app.get("/UserFollowing#ReportVendor", (req, res) => {
  //TODO: Check if this profile has already reported this user. If they have, do not go through with the report.
  let message = ReportMessage(req.isVendor)
  //TODO: Add this report to a database of reported profiles.
  res.send(message)
});

const ReportMessage = (isVendor) => {
  return isVendor ? "Thank you for reporting this vendor. We will investigate their profile and take appropriate action." : 
                    "Thank you for reporting this user. We will investigate their profile and take appropriate action."
}

module.exports = app;
