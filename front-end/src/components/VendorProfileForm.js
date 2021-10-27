import React from "react";

import {
  FormGroup,
  Label,
  Input,
  FormText,
  Button
} from "reactstrap";

/*
//generate subcategories list
const getSubcategoryList = (vendorCategory) =>{
  let output = [];
  switch (vendorCategory){
    case "Food":
      output = ["Snacks", "Breakfast", "Drinks", "Asian", "African", "Latin American", "European"];
  }
  return output;
}

const getSubcategoryInput = () =>{
  return (

  )
}
*/

const VendorProfileForm= () => {
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
        <Input type="select" name="select" id="vendorCategory">
          <option>Food</option>
          <option>Fruit and Vegetable</option>
          <option>Accessories</option>
          <option>Art</option>
          <option>Other</option>
        </Input>
      </FormGroup>
      <FormGroup>
        <Label for="location">Location</Label>
        <Input type="textarea" name="text" id="location" placeholder="W 4th Street across from Stern Business School" />
      </FormGroup>
      <FormGroup>
        <Label for="hours">Hours</Label>
        <Input type="textarea" name="text" id="hours" placeholder="Mondays-Saturday 9am-6pm" />
      </FormGroup>
      <FormGroup>
        <Label for="menu">Menu</Label>
        <Input type="textarea" name="text" id="menu" placeholder="Green juice - $5" />
      </FormGroup>
      <FormGroup>
        <Label for="description">Description</Label>
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