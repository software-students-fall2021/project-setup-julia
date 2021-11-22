const mongoose = require("mongoose");

const User = new mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  fullname: { type: String, required: true },
  email: { type: String, required: true },
});

const Vendor = new mongoose.Schema({
  businessName: { type: String, required: true },
  vendorCategory: { type: String, required: true },
  location: { type: String, required: true },
  hours: { type: String, required: true },
  menu: { type: String, required: true },
  description: { type: String, required: true },
  fullName: { type: String, required: true },
  email: { type: String, required: true },
  username: { type: String, required: true },
  password: { type: String, required: true },
});

const Contact_Message = new mongoose.Schema({
  email: {type: String, required: true },
  message: {type: String, required: true}
});

mongoose.model("User", User);
mongoose.model("Vendor", Vendor);
mongoose.model("Contact_Message", Contact_Message);

mongoose.connect("mongodb://localhost");
