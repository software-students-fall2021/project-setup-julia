require('dotenv').config({ silent: true })
const mongoose = require("mongoose");
const uri = process.env.MONGOOSE_URI
const User = new mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  fullname: { type: String, required: true },
  email: { type: String, required: true },
});

const Vendor = new mongoose.Schema({
  businessName: { type: String, required: true },
  vendorCategory: { type: String, required: true },
  vendorSubcategory: [{type: String, required: false, default : undefined }],
  location: { type: String, required: false },
  hours: { type: String, required: false },
  menu: { type: String, required: false },
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

const Report = new mongoose.Schema({
  businessName: { type: String, required: true },
  businessIsVendor: { type: Boolean, required: true },
  reporterNames: { type: [String], required: true },
  reportCount: { type: Number, required: true },
});

mongoose.model("User", User);
mongoose.model("Vendor", Vendor);
mongoose.model("Contact_Message", Contact_Message);
mongoose.model("Report", Report);
mongoose.connect(uri);
