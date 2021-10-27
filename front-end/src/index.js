import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import "assets/css/bootstrap.min.css";
import "assets/css/paper-kit.css";
// import "assets/css/paper-kit.min.css";
// import "assets/css/paper-kit.css.map";
import "assets/demo/demo.css";

import Home from "views/Home.js";
import Vendors from "views/Vendors.js";
import About from "views/About.js";
import Contact from "views/Contact.js";
import Profile from "views/Profile.js";
import VendorSideProfile from "views/VendorSideProfile.js";
import UserProfile from "views/UserProfile.js";
import UserFollowing from "views/UserFollowing.js";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/Home" render={(props) => <Home {...props} />} />
      <Route path="/Vendors" render={(props) => <Vendors {...props} />} />
      <Route path="/About" render={(props) => <About {...props} />} />
      <Route path="/Contact" render={(props) => <Contact {...props} />} />
      <Route path="/Profile" render={(props) => <Profile {...props} />} />
      <Route
        path="/UserProfile"
        render={(props) => <UserProfile {...props} />}
      />
      <Route
        path="/UserFollowing"
        render={(props) => <UserFollowing {...props} />}
      />
      <Route
        path="/VendorSideProfile"
        render={(props) => <VendorSideProfile {...props} />}
      />
      <Redirect to="/Home" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
