// import and instantiate express
const express = require("express"); // CommonJS import style!
const app = express(); // instantiate an Express object
app.use("/static", express.static("public"));
module.exports = app;
