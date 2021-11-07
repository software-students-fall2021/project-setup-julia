// import and instantiate express
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

// app.get('/userfollowing', (req, res) => {})

// app.get('/searchresults', (req, res) => {})

// app.get('/subcategories', (req, res) => {})

// app.get('/vendors', (req, res) => {})

app.get('/editvendorprofile', (req,res) => {
    const sampleProfile = {
        name : "Julia's Juice Stand",
        category : "Food",
        subcategories : [],
        location : "W 4th Street across from Stern Business School",
        hours : "Monday - Friday 9am-6pm",
        menu : "Green juice - $5",
        description : "Convenient, healthy, delicious green juices made to order by Julia!"
    }
    res.json(sampleProfile);
})


// app.get('/vendorprofile', (req, res) => {})

// app.get('/vendorsignup', (req, res) => {})

module.exports = app
