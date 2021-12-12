import React, { useState, useEffect } from "react";

import { FormGroup, Label, Input, FormText, Button } from "reactstrap";
import "./VendorProfileForm.css";
import axios from "axios";
import { useHistory } from "react-router-dom";
import Select from 'react-select'
import { Profiler } from "react";
import Swal from 'sweetalert2'

function VendorProfileForm() {
  const [stateSubcategories, setStateSubcategories] = useState([]);
  const [profile, setProfile] = useState({});
  const jwtToken = localStorage.getItem("token") // the JWT token, if we have already received one and stored it in localStorage
  console.log(`JWT token: ${jwtToken}`) // debugging

  const history = useHistory();

  useEffect(() =>{
    axios.get('http://localhost:5000/vendor-profile', 
    {headers: {Authorization: `JWT ${jwtToken}`}},
    )
    //axios.get('http://localhost:5000/samplevendorprofile')
    .then(res =>{
      //account type authentication already allowed from previous page, but will put for redundancy here
      if (res.data.success && res.data.vendor){
        const subcategories = loadSubcategoryOptions(res.data.vendor.vendorCategory)
        res.data.vendor.vendorSubcategory.map(selected => {
            const index = subcategories.findIndex(subcat => subcat.label == selected)
            subcategories[index].checked = true;
          })
          console.log(res.data.vendor)
        setProfile(res.data.vendor);
        setStateSubcategories(subcategories)
      }
      else{
        console.log(res.data.message)
      }
    })
    .catch(err =>{
      console.log(err)
    })
    
  }, [])

  const handleSubmit = async (e) => {
    // prevent the HTML form from actually submitting... we use React's javascript code instead
    e.preventDefault();

    try {
      // create an object with the data we want to send to the server
      let selectedSubcategories = []
      stateSubcategories.filter(subcat => subcat.checked).map(subcatObject =>{
        selectedSubcategories.push(subcatObject.label)
      })
      //console.log(`selectedSubcategories\n ${selectedSubcategories}`)
      const requestData = {
        id : profile.id,
        businessName: e.target.businessName.value,
        vendorCategory: e.target.vendorCategory.value,
        vendorSubcategory: selectedSubcategories,
        location: e.target.location.value,
        hours: e.target.hours.value,
        menu: e.target.menu.value,
        description: e.target.description.value,
      };

      const response = await axios.post(
        "http://localhost:5000/VendorProfileForm",
        requestData
      );
      console.log(response)
      if (response.data.success){
        Swal.fire(
          'Nice!',
          "You have successfully updated your vendor profile!",
          'success'
        )
      }
      else{
        Swal.fire("Oops!","We were unable to update your profile.", "You'll have to try again.")
      } 
      history.push("/VendorProfile");
      

      // store the response data into the data state variable
    } catch (err) {
      // throw an error
      console.log(err);
      throw new Error(err);
    }
  };

  const loadSubcategoryOptions = (selectedCategory) => {
    //gets subcategory options from external file
    let subcategories = [];
    const subcatFile = require ('../CategoriesSubcategories.json')
    subcategories = subcatFile[selectedCategory]
    let arr = []
    subcategories.map(subcat =>{
      //arr.push({name:subcat, checked : false})
      arr.push({value: subcat, label: subcat, checked:false})
    })
    return arr;
  };

  const handleCategoryInput = async (event) => {
    if (event.target.value!="Select a Category")
    {
      const arr = loadSubcategoryOptions(event.target.value);
      setStateSubcategories(arr);    
    }
  };

  const handleSubcategoryInput = async(inputs) =>{
    let arr = stateSubcategories
    arr.map( element => {
      element.checked = false
    })
    inputs.map(input =>{
      let index = arr.findIndex((subcat)=> subcat.label == input.label)
      arr[index].checked = true
    })
    setStateSubcategories(arr)
    
  }


  return (
    <form onSubmit={handleSubmit}>
      <FormGroup>
        <Label for="businessName">Name</Label>
        <Input
          type="text"
          name="businessName"
          id="businessName"
          defaultValue = {profile.businessName}
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
          defaultValue = {profile.vendorCategory}
        >
          <option>Food</option>
          <option>Produce</option>
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
            defaultValue = {profile.vendorSubcategory}
          >
            Select Subcategories
          </Label>
          <Select isMulti
          name = "subcategoriesMulti"
          defaultValue = {stateSubcategories.filter(subcat => subcat.checked)}
          options = {stateSubcategories.filter(subcat => !subcat.checked)}
          onChange = {handleSubcategoryInput}/>
        </FormGroup>
      ) : null}
      <FormGroup>
        <Label for="location">Location</Label>
        <Input
          type="textarea"
          name="location"
          id="location"
          defaultValue={profile.location}
        />
      </FormGroup>
      <FormGroup>
        <Label for="hours">Hours</Label>
        <Input
          type="textarea"
          name="hours"
          id="hours"
          value={profile.hours}
        />
      </FormGroup>
      <FormGroup>
        <Label for="menu">Menu</Label>
        <Input
          type="textarea"
          name="menu"
          id="menu"
          defaultValue={profile.menu}
        />
      </FormGroup>
      <FormGroup>
        <Label for="description">Description</Label>
        <Input
          type="textarea"
          name="description"
          id="description"
          defaultValue={profile.description}
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