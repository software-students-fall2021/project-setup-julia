// import and instantiate express
<<<<<<< HEAD
const express = require("express"); // CommonJS import style!
const app = express(); // instantiate an Express object

app.use("/static", express.static("public"));
app.use(express.json()); // decode JSON-formatted incoming POST data
app.use(express.urlencoded({ extended: true })); // decode url-encoded incoming POST data

app.get("/UserProfileForm", (req, res) => {
  console.log(req.data);
});
=======
const express = require('express') // CommonJS import style!

// const {
//   default: AvAddToQueue,
// } = require("material-ui/svg-icons/av/add-to-queue");

const app = express() // instantiate an Express object

const port = 5000

app.get('/', (req, res) => res.send('wasssup bitches '))

app.listen(port, () => console.log(`app listening on port ${port}!`))

// app.use('/static', express.static('public'))

// app.get('/home', (req, res) => {})

// app.get('/about', (req, res) => {})

// app.get('/contact', (req, res) => {})

// app.get('/login', (req, res) => {})

// app.get('/usersignup', (req, res) => {})

// app.get('/userprofile', (req, res) => {})
>>>>>>> ccbd2f8ce0cc00a37ebb45b42388df70b5c58c7d

// app.get('/userfollowing', (req, res) => {})

// app.get('/searchresults', (req, res) => {})

// app.get('/subcategories', (req, res) => {})

// app.get('/vendors', (req, res) => {})

// app.get('/vendorprofile', (req, res) => {})

// app.get('/vendorsignup', (req, res) => {})

module.exports = app
