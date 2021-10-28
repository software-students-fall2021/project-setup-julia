import React, { useState} from "react"

import {
  FormGroup,
  Label,
  Input,
  FormText,
  Button
} from "reactstrap";
import "./VendorProfileForm.css"

function VendorProfileForm() {     

  const [stateSubcategories, setStateSubcategories] = useState([]);

  const setSubcategoryOptions = (selectedCategory) =>{
    let subcategories = []
    switch (selectedCategory){
      case "Food":
        subcategories = ["Snacks", "Breakfast", "Drinks", "Asian", "African", "Latin American", "European"];
    }
    setStateSubcategories(subcategories);
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
          placeholder="Julia's Juice Stand"
        />
      </FormGroup>
      <br />
      <FormGroup>
      <Label for="vendorCategory">Category</Label>
        <Input type="select" name="select" id="vendorCategory" onInput={handleCategoryInput}>
          <option selected>Select a Category</option>
          <option>Food</option>
          <option>Fruit and Vegetable</option>
          <option>Accessories</option>
          <option>Art</option>
          <option>Other</option>
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
        <Label for="vendorLocation">Location</Label>
        <Input type="textarea" name="text" id="location" placeholder="W 4th Street across from Stern Business School" />
      </FormGroup>
      <FormGroup>
        <Label for="vendorHours">Hours</Label>
        <Input type="textarea" name="text" id="hours" placeholder="Mondays-Saturday 9am-6pm" />
      </FormGroup>
      <FormGroup>
        <Label for="vendorMenu">Menu</Label>
        <Input type="textarea" name="text" id="menu" placeholder="Green juice - $5" />
      </FormGroup>
      <FormGroup>
        <Label for="vendorDescription">Description</Label>
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