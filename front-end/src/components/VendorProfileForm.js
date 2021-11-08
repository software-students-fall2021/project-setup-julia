import axios from "axios";
import React, { useState, useEffect} from "react"

import {
  FormGroup,
  Label,
  Input,
  FormText,
  Button
} from "reactstrap";
import "./VendorProfileForm.css"

const categoriesSubcategories = require("../CategoriesSubcategories.json");

function VendorProfileForm() {     

  const [profile, setProfile] = useState({});
  const [stateSubcategories, setStateSubcategories] = useState([]);
  const history = useHistory();
  const handleSubmit = async (e) => {
    // prevent the HTML form from actually submitting... we use React's javascript code instead
    e.preventDefault();

    try {
      // create an object with the data we want to send to the server
      const requestData = {
        businessName: e.target.businessName.value,
        vendorCategory: e.target.vendorCategory.value,
        location: e.target.location.value,
        hours: e.target.hours.value,
        menu: e.target.menu.value,
        description: e.target.description.value,
      };

      const response = await axios.post(
        "http://localhost:5000/VendorProfileForm",
        requestData
      );
      console.log(response);
      console.log("hello");

      //redirect user to the login page
      history.push("/VendorProfile");

<<<<<<< HEAD
  //from animal.js in sample react app
  useEffect(() => {
    // fetch some mock data about animals for sale
    console.log(`fetching vendor name=${profile.name}...`)
    axios('/editvendorprofile')
    .then((response) => {
      setProfile(response.data);
    })
    .catch((err) =>{
      console.log("error during useEffect axios call");
      console.error(err);
    })
      
  }, [profile])

  const setSubcategoryOptions = (selectedCategory) =>{
    let subcategories = []
    switch (selectedCategory){
=======
      // store the response data into the data state variable
    } catch (err) {
      // throw an error
      console.log(err);
      throw new Error(err);
    }
  };

  const setSubcategoryOptions = (selectedCategory) => {
    let subcategories = [];
    switch (selectedCategory) {
>>>>>>> 35231053535f01a805a25ab73748c7d9871b256a
      case "Food":
        subcategories = [
          "Snacks",
          "Breakfast",
          "Drinks",
          "Asian",
          "African",
          "Latin American",
          "European",
        ];
    }
    subcategories = categoriesSubcategories.selectedCategory
    setStateSubcategories(subcategories);
<<<<<<< HEAD
    const newProfile = profile
    newProfile.subcategories = subcategories
    setProfile(newProfile)
  }
=======
  };
>>>>>>> 35231053535f01a805a25ab73748c7d9871b256a

  const handleCategoryInput = async (event) => {
    setSubcategoryOptions(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormGroup>
        <Label for="vendorName">Name</Label>
        <Input
          type="name"
          name="businessName"
          id="vendorName"
          placeholder={profile.name}
        />
      </FormGroup>
      <br />
      <FormGroup>
<<<<<<< HEAD
      <Label for="vendorCategory">Category</Label>
        <Input type="select" name="select" id="vendorCategory" onInput={handleCategoryInput}>
          <option selected>
            Select a Category
            </option>
          <option>
            Food
            </option>
          <option>
            Produce
            </option>
          <option>
            Accessories
            </option>
          <option>
            Art
            </option>
          <option>
            Other
            </option>
=======
        <Label for="vendorCategory">Category</Label>
        <Input
          type="select"
          name="vendorCategory"
          id="vendorCategory"
          onInput={handleCategoryInput}
        >
          <option selected>Select a Category</option>
          <option>Food</option>
          <option>Fruit and Vegetable</option>
          <option>Accessories</option>
          <option>Art</option>
          <option>Other</option>
>>>>>>> 35231053535f01a805a25ab73748c7d9871b256a
        </Input>
      </FormGroup>
      {stateSubcategories.length > 0 ? (
        <FormGroup check>
          <Label
            check
            for="vendorSubcategories"
            name="selectMulti"
            id="vendorSubcategories"
          >
            Select Subcategories
          </Label>
          {stateSubcategories.map((subcategory) => (
            <FormGroup check>
              <Label check>
                <Input type="checkbox" id="subcategory" />
                {subcategory}
                <span className="form-check-sign">
                  <span className="check"></span>
                </span>
              </Label>
            </FormGroup>
          ))}
        </FormGroup>
      ) : null}
      <FormGroup>
        <Label for="location">Location</Label>
        <Input
          type="textarea"
          name="location"
          id="location"
          placeholder="W 4th Street across from Stern Business School"
        />
      </FormGroup>
      <FormGroup>
        <Label for="hours">Hours</Label>
        <Input
          type="textarea"
          name="hours"
          id="hours"
          placeholder="Mondays-Saturday 9am-6pm"
        />
      </FormGroup>
      <FormGroup>
        <Label for="menu">Menu</Label>
        <Input
          type="textarea"
          name="menu"
          id="menu"
          placeholder="Green juice - $5"
        />
      </FormGroup>
      <FormGroup>
        <Label for="description">Description</Label>
        <Input
          type="textarea"
          name="description"
          id="description"
          placeholder="Convenient, healthy, delicious green juices made to order by Julia!"
        />
      </FormGroup>
      <br />
      <Button color="primary" type="submit">
        Save Changes
      </Button>
    </form>
  );
}

export default VendorProfileForm;
