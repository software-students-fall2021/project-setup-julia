import React, { useState } from "react";

import { FormGroup, Label, Input, FormText, Button } from "reactstrap";
import "./VendorProfileForm.css";
import axios from "axios";
import { useHistory } from "react-router-dom";

function VendorProfileForm() {
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
    setStateSubcategories(subcategories);
  };

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
          placeholder="Julia's Juice Stand"
        />
      </FormGroup>
      <br />
      <FormGroup>
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
