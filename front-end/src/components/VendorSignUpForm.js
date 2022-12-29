import React, {useState} from 'react'
import axios from 'axios'
import Swal from 'sweetalert2'
import { useHistory } from 'react-router-dom'
import { FormGroup, Label, Input, FormText, Button } from 'reactstrap'
import Select from 'react-select'

const VendorSignUpForm = () => {
  const history = useHistory()
  const [stateSubcategories, setStateSubcategories] = useState([]);     //sent to server
  const handleSubmit = async (e) => {
    // prevent the HTML form from actually submitting... we use React's javascript code instead
    e.preventDefault()

    try {
      // create an object with the data we want to send to the server

      let selectedSubcategories = []
      stateSubcategories.filter(subcat => subcat.checked).map(subcatObject =>{
        selectedSubcategories.push(subcatObject.label)
      })
    
      console.log(`selectedSubcategories\n ${selectedSubcategories}`)

      const requestData = {
        businessName: e.target.businessName.value,

        vendorCategory: e.target.vendorCategory.value,

        vendorSubcategory: selectedSubcategories,

        location: e.target.location.value,

        hours: e.target.hours.value,

        menu: e.target.menu.value,

        description: e.target.description.value,

        fullName: e.target.fullName.value,

        email: e.target.email.value,

        username: e.target.username.value, // gets the value of the field in the submitted form with name='username'
        password: e.target.password.value, // gets the value of the field in the submitted form with name='password',
      }

      const response = await axios.post(
        'http://localhost:5000/vendorSignUp',
        requestData
      )
      console.log(response)

      Swal.fire(
        'Awesome!',
        "You're successfully registered!Please login to your account",
        'success'
      )
      //redirect user to the login page
      history.push('/login')

      // store the response data into the data state variable
    } catch (err) {
      // throw an error
      console.log(err)
      throw new Error(err)
    }
  }

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
    console.log(arr)
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
    console.log(`subcategory input ${JSON.stringify(inputs)}`)
    let arr = stateSubcategories
    arr.map( element => {
      element.checked = false
    })
    inputs.map(input =>{
      let index = arr.findIndex((subcat)=> subcat.label == input.label)
      arr[index].checked = true
    })
    console.log(`temp array \n ${JSON.stringify(arr)}`)
    setStateSubcategories(arr)
    
  }

  return (
    <form onSubmit={handleSubmit}>
      <FormGroup>
        <Label for='vendorName'>Business Name</Label>
        <Input type='text' name='businessName' />
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
          >
            Select Subcategories
          </Label>
          <Select isMulti
          name = "subcategoriesMulti"
          options = {stateSubcategories}
          onChange = {handleSubcategoryInput}/>
        </FormGroup>
      ) : null}
      <FormGroup>
        <Label for='location'>Location</Label>
        <Input type='textarea' name='location' />
      </FormGroup>
      <FormGroup>
        <Label for='hours'>Hours</Label>
        <Input type='textarea' name='hours' />
      </FormGroup>
      <FormGroup>
        <Label for='menu'>Menu</Label>
        <Input type='textarea' name='menu' />
      </FormGroup>
      <FormGroup>
        <Label for='description'>Description</Label>
        <Input type='textarea' name='description' />
      </FormGroup>
      <FormGroup>
        <Label for='description'>Full Name</Label>
        <Input type='text' name='fullName' />
      </FormGroup>
      <FormGroup>
        <Label for='description'>Email</Label>
        <Input type='text' name='email' />
      </FormGroup>
      <FormGroup>
        <Label for='description'>Username</Label>
        <Input type='text' name='username' />
      </FormGroup>
      <FormGroup>
        <Label for='description'>Password</Label>
        <Input type='text' name='password' />
      </FormGroup>
      <br />
      <Button color='primary' type='submit'>
        Register My Business
      </Button>
    </form>
  )
}

export default VendorSignUpForm
