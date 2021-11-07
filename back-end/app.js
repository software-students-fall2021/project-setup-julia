// import and instantiate express
const express = require("express"); // CommonJS import style!
const app = express(); // instantiate an Express object

app.use("/static", express.static("public"));
app.use(express.json()); // decode JSON-formatted incoming POST data
app.use(express.urlencoded({ extended: true })); // decode url-encoded incoming POST data

app.get("/UserProfileForm", (req, res) => {
  console.log(req.data);
});

const express = require('express') // CommonJS import style!

// const {
//   default: AvAddToQueue,
// } = require("material-ui/svg-icons/av/add-to-queue");

const app = express() // instantiate an Express object

const port = 5000

app.get('/', (req, res) => res.send('wasssup bitches '))

app.listen(port, () => console.log(`app listening on port ${port}!`))

app.use('/static', express.static('public'))


module.exports = app
