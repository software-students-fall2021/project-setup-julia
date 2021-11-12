import React from 'react'
import axios from 'axios'
import Swal from 'sweetalert2'
import { useHistory } from 'react-router-dom'

import { FormGroup, Label, Input, FormText, Button } from 'reactstrap'

const UserSignUpForm = () => {
  const history = useHistory()

  const handleSubmit = async (e) => {
    // prevent the HTML form from actually submitting... we use React's javascript code instead
    e.preventDefault()

    try {
      // create an object with the data we want to send to the server
      const requestData = {
        fullName: e.target.fullName.value,
        email: e.target.email.value,
        username: e.target.username.value, // gets the value of the field in the submitted form with name='username'
        password: e.target.password.value, // gets the value of the field in the submitted form with name='password',
      }
      //console.log(requestData)

      const response = await axios.post(
        'http://localhost:5000/userSignUp',
        requestData
      )
      // store the response data into the data state variable
      console.log(response)

      Swal.fire(
        'Awesome!',
        "You're successfully registered!Please login to your account",
        'success'
      )
      //redirect user to the login page
      history.push('/login')
    } catch (err) {
      // throw an error
      console.log(err)
      throw new Error(err)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
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
        Sign Up
      </Button>
    </form>
  )
}

export default UserSignUpForm
