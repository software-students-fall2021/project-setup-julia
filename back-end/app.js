// import and instantiate express
const express = require("express"); // CommonJS import style!
const {
  default: AvAddToQueue,
} = require("material-ui/svg-icons/av/add-to-queue");
const app = express(); // instantiate an Express object
app.use("/static", express.static("public"));

app.get("/home", (req, res) => {});

app.get("/about", (req, res) => {});

app.get("/contact", (req, res) => {});

app.get("/login", (req, res) => {});

app.get("/usersignup", (req, res) => {});

app.get("/userprofile", (req, res) => {});

app.get("/userfollowing", (req, res) => {});

app.get("/searchresults", (req, res) => {});

app.get("/subcategories", (req, res) => {});

app.get("/vendors", (req, res) => {});

app.get("/vendorprofile", (req, res) => {});

app.get("/vendorsignup", (req, res) => {});

module.exports = app;