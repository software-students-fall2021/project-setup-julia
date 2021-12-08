import React from 'react'
import axios from 'axios'
import Swal from 'sweetalert2'
import { useHistory } from 'react-router-dom'
import { FormGroup, Label, Input, FormText, Button } from 'reactstrap'

const VendorSignUpForm = () => {
  const history = useHistory()
  const handleSubmit = async (e) => {
    // prevent the HTML form from actually submitting... we use React's javascript code instead
    e.preventDefault()

    try {
      // create an object with the data we want to send to the server
      const requestData = {
        businessName: e.target.businessName.value,

        vendorCategory: e.target.vendorCategory.value,

        vendorSubcategory: e.target.vendorSubcategory.value,

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

  return (
    <form onSubmit={handleSubmit}>
      <FormGroup>
        <Label for='vendorName'>Business Name</Label>
        <Input type='text' name='businessName' />
      </FormGroup>
      <br />
      <FormGroup>
        <Label for='vendorCategory'>Category</Label>
        <Input type='select' name='vendorCategory'>
          <option>Food</option>
          <option>Fruit and Vegetable</option>
          <option>Accessories</option>
          <option>Art</option>
          <option>Other</option>
        </Input>
      </FormGroup>
      <FormGroup>
        <Label for='vendorSubcategory'>Subcategory</Label>
        <Input type='textarea' name='vendorSubcategory' />
      </FormGroup>
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
