// import and instantiate express
const express = require("express"); // CommonJS import style!
const app = express(); // instantiate an Express object

//this ensures we don't get cors errors
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

app.use("/static", express.static("public"));
app.use(express.json()); // decode JSON-formatted incoming POST data

app.use(express.urlencoded({ extended: true })); // decode url-encoded incoming POST data

app.post("/UserProfileForm", (req, res) => {
  const body = {
    username: req.body.username,
    password: req.body.password,
  };
  res.json(body);
});

app.post("/VendorProfileForm", (req, res) => {
  const body = {
    businessName: req.body.businessName,
    vendorCategory: req.body.vendorCategory,
    location: req.body.location,
    hours: req.body.hours,
    menu: req.body.menu,
    description: req.body.description,
  };
  //once we have our DB ready will connect this
  res.json(body);
});

app.get("/", (req, res) => res.send("hello world"));

// this will handle the post requests to Sign our user up
app.post("/userSignUp", (req, res) => {
  const body = {
    fullName: req.body.fullName,
    email: req.body.email,
    username: req.body.username,
    password: req.body.password,
  };
  //once we have our DB ready will connect this
  res.json(body);
});

// this will handle the post requests to Sign Up Vendors
app.post("/vendorSignUp", (req, res) => {
  const body = {
    businessName: req.body.businessName,
    vendorCategory: req.body.vendorCategory,
    location: req.body.location,
    hours: req.body.hours,
    menu: req.body.menu,
    description: req.body.description,
    fullName: req.body.fullName,
    email: req.body.email,
    username: req.body.username,
    password: req.body.password,
  };
  //once we have our DB ready will connect this
  res.json(body);
});

// this will handle the post requests login
app.post("/login", (req, res) => {
  const body = {
    email: req.body.email,
    password: req.body.password,
  };
  //once we have our DB ready will connect this
  res.json(body);
});

app.use("/static", express.static("public"));

module.exports = app;
