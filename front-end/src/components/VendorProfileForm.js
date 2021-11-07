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
      case "Food":
        subcategories = ["Snacks", "Breakfast", "Drinks", "Asian", "African", "Latin American", "European"];
    }
    subcategories = categoriesSubcategories.selectedCategory
    setStateSubcategories(subcategories);
    const newProfile = profile
    newProfile.subcategories = subcategories
    setProfile(newProfile)
  }

  const handleCategoryInput = async event =>{
    setSubcategoryOptions(event.target.value);
  }

  return (
    <form>
      <FormGroup>
        <Label for="vendorName">Name</Label>
        <Input
          type="name"
          name="name"
          id="vendorName"
          placeholder={profile.name}
        />
      </FormGroup>
      <br />
      <FormGroup>
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
        </Input>
      </FormGroup>
      {
        (stateSubcategories.length>0) ?
        <FormGroup check>
        <Label check for="vendorSubcategories" name= "selectMulti" id= "vendorSubcategories">Select Subcategories</Label>
        {
          stateSubcategories.map(subcategory => (
            <FormGroup check>
              <Label check>
                <Input type="checkbox" id="subcategory" />{subcategory}          
                <span className="form-check-sign">
                <span className="check"></span>
                </span>
              </Label>
            </FormGroup>
          ))
        }
        </FormGroup> : null
      }
      <FormGroup>
        <Label for="location">
          Location
        </Label>
        <Input type="textarea" name="text" id="location" placeholder="W 4th Street across from Stern Business School" />
      </FormGroup>
      <FormGroup>
        <Label for="hours">
          Hours
        </Label>
        <Input type="textarea" name="text" id="hours" placeholder="Mondays-Saturday 9am-6pm" />
      </FormGroup>
      <FormGroup>
        <Label for="menu">
          Menu
        </Label>
        <Input type="textarea" name="text" id="menu" placeholder="Green juice - $5" />
      </FormGroup>
      <FormGroup>
        <Label for="description">
          Description
        </Label>
        <Input type="textarea" name="text" id="description" placeholder="Convenient, healthy, delicious green juices made to order by Julia!" />
      </FormGroup>
      <br />
      <Button color="primary" type="submit">
        Save Changes
      </Button>
    </form>
  );
};

export default VendorProfileForm;
