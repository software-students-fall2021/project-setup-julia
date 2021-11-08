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
import SearchResults from "views/SearchResults.js";
import Subcategories from "views/Subcategories.js";
import Login from "views/Login.js";
import VendorSignUp from "views/VendorSignUp.js";
import UserSignUp from "views/UserSignUp.js";
import UserEditProfile from "views/UserEditProfile";
import VendorProfileForm from "components/VendorProfileForm";
import VendorProfile from "views/VendorProfile.js";
import FastFood from "views/FastFood.js";
import Snacks from "views/Snacks.js";
import Breakfast from "views/Breakfast.js";
import Drinks from "views/Drinks.js";
import Asian from "views/Asian.js";
import African from "views/African.js";
import LatinAmerican from "views/LatinAmerican.js";
import European from "views/European.js";
import Fruits from "views/Fruits.js";
import Vegetables from "views/Vegetables.js";
import Jewelry from "views/Jewelry.js";
import Masks from "views/Masks.js";
import Hair from "views/Hair.js";
import Makeup from "views/Makeup.js";
import Paintings from "views/Paintings.js";
import Photography from "views/Photography.js";
import Other from "views/Other.js";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/Home" render={(props) => <Home {...props} />} />
      <Route path="/Vendors" render={(props) => <Vendors {...props} />} />
      <Route path="/About" render={(props) => <About {...props} />} />
      <Route path="/Contact" render={(props) => <Contact {...props} />} />
      <Route path="/Profile" render={(props) => <Profile {...props} />} />
      <Route path="/Login" render={(props) => <Login {...props} />} />
      <Route
        path="/VendorSignUp"
        render={(props) => <VendorSignUp {...props} />}
      />
      <Route path="/UserSignUp" render={(props) => <UserSignUp {...props} />} />

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
      <Route
        path="/UserEditProfile"
        render={(props) => <UserEditProfile {...props} />}
      />
      <Route
        path="/SearchResults"
        render={(props) => <SearchResults {...props} />}
      />
      <Route
        path="/Subcategories"
        render={(props) => <Subcategories {...props} />}
      />

      <Route
        path="/VendorProfile"
        render={(props) => <VendorProfile {...props} />}
      />
      <Route
        path="/FastFood"
        render={(props) => <FastFood {...props} />}
      />
      <Route
        path="/Snacks"
        render={(props) => <Snacks {...props} />}
      />
      <Route
        path="/Breakfast"
        render={(props) => <Breakfast {...props} />}
      />
      <Route
        path="/Drinks"
        render={(props) => <Drinks {...props} />}
      />
      <Route
        path="/Asian"
        render={(props) => <Asian {...props} />}
      />
      <Route
        path="/African"
        render={(props) => <African {...props} />}
      />
      <Route
        path="/LatinAmerican"
        render={(props) => <LatinAmerican {...props} />}
      />
      <Route
        path="/European"
        render={(props) => <European {...props} />}
      />
      <Route
        path="/Fruits"
        render={(props) => <Fruits {...props} />}
      />
      <Route
        path="/Vegetables"
        render={(props) => <Vegetables {...props} />}
      />
      <Route
        path="/Jewelry"
        render={(props) => <Jewelry {...props} />}
      />
      <Route
        path="/Masks"
        render={(props) => <Masks {...props} />}
      />
      <Route
        path="/Hair"
        render={(props) => <Hair {...props} />}
      />
      <Route
        path="/Makeup"
        render={(props) => <Makeup {...props} />}
      />
      <Route
        path="/Paintings"
        render={(props) => <Paintings {...props} />}
      />
      <Route
        path="/Photography"
        render={(props) => <Photography {...props} />}
      />
      <Route
        path="/Other"
        render={(props) => <Other {...props} />}
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
