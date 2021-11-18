// import and instantiate express
const express = require("express"); // CommonJS import style!
const cors = require("cors");
const { TRUE } = require("node-sass");
const app = express(); // instantiate an Express object
const db = require("./db.js");
const mongoose = require("mongoose");
const User = mongoose.model("User");
const Vendor = mongoose.model("Vendor");

app.use(cors());

//this ensures we don't get cors errors
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

app.use("/static", express.static("public"));
app.use(express.json()); // decode JSON-formatted incoming POST data
app.use(express.urlencoded({ extended: true })); // decode url-encoded incoming POST data

app.get("/products/:id", function (req, res, next) {
  res.json({ msg: "This is CORS-enabled for all origins!" });
});

app.listen(80, function () {
  console.log("CORS-enabled web server listening on port 80");
});

app.post("/Contact", (req, res) => {
  const email = req.body.email;
  const text = req.body.text;
  const data = {
    email: email,
    text: text,
  };
  console.log("success, %s %s", email, text);
  res.json(data);
});

app.get("/UserProfileForm", (req, res) => {
  console.log(req.data);
});

app.get("/", (req, res) => res.send("hello world"));

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

app.get("/vendorprofile", (req, res) => {
  const sampleProfile = {
    name: "Michael's Meringue Menagerie",
    category: "Food",
    subcategories: ["Snacks", "European"],
    location: "W 4th St across from Starbucks",
    hours: "Saturday-Sunday 12pm-5pm",
    menu: "Vanilla Meringue box of 10 - $5",
    description: "Michael's homemade meringues!",
  };
  res.json(sampleProfile);
});

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

  //making a new vendor using the databse schema
  const newVendor = new Vendor({
    businessName: body.businessName,
    vendorCategory: body.vendorCategory,
    location: body.location,
    hours: body.hours,
    menu: body.menu,
    description: body.description,
    fullName: body.fullName,
    email: body.email,
    username: body.username,
    password: body.password,
  });

  newVendor.save((err) => {
    if (err) {
      console.log(err);
    }
  });

  res.json(body);
});

// this will handle the post requests login
app.post("/login", (req, res) => {
  const body = {
    email: req.body.email,
    password: req.body.password,
  };
  //I will check the Db if these credentials match any one. the response will either be true or false

  result = TRUE;
  //once we have our DB ready will connect this
  res.send(result);
});

app.post("/reportaccount", (req, res) => {
  if (
    req.hasOwnProperty("body") &&
    req.body.hasOwnProperty("reportedID") &&
    req.body.hasOwnProperty("reporterID")
  ) {
    res.report = req.body.isVendor
      ? "Thank you for reporting this vendor. We will investigate their profile and take appropriate action."
      : "Thank you for reporting this user. We will investigate their profile and take appropriate action.";
    //TODO: Check if this profile has already reported this user. If they have, do not go through with the report.
    //TODO: Add this report to a database of reported profiles.
  } else res.report = "Error: Invalid Report";
  res.send(res.report);
});

app.post("/handleSearch", (req, res) => {
  const body = {
    searchValue: req.body.searchValue,
  };

  res.json(body);
});

module.exports = app;
