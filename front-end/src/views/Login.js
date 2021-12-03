import React, { useState } from 'react'
//import Form from 'react-bootstrap/Form'
//import Button from 'react-bootstrap/Button'

import axios from 'axios'
import Swal from 'sweetalert2'
import { useHistory } from 'react-router-dom'

import '../assets/css/Login.css'

import Footer from 'components/Footer.js'
import Navigation from 'components/Navigation.js'
import About_header from 'components/About_header.js'

import { FormGroup, Label, Input, FormText, Button } from 'reactstrap'

export default function Login() {
  const history = useHistory()

  // function validateForm() {
  //   return email.length > 0 && password.length > 0
  // }
  const handleSubmit = async (e) => {
    // prevent the HTML form from actually submitting... we use React's javascript code instead
    e.preventDefault()

    try {
      // create an object with the data we want to send to the server
      const requestData = {
        email: e.target.email.value,

        password: e.target.password.value, // gets the value of the field in the submitted form with name='password',
      }

      console.log(requestData)

      const response = await axios.post(
        'http://localhost:5000/login',
        requestData
      )

      console.log(response)
      console.log('this is the response', response.data.success)
      if (!response.data.success) {
        Swal.fire('Wrong Password or Username', 'Try again')
      } else {
        Swal.fire('Awesome!', "You're successfully logged in!", 'success')
        //store login token
        localStorage.setItem("token", response.data.token)
        //redirect user to the login page
        history.push('/')
      }
    } catch (err) {
      // throw an error
      console.log(err)
      throw new Error(err)
    }
  }

  return (
    <>
      <Navigation />
      <About_header />
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <div className='Login'>
        <h1 style={{ textAlign: 'center' }}>
          Welcome to Whendor, Please Login
        </h1>

        <form onSubmit={handleSubmit}>
          <FormGroup>
            <Label for='description'>Username</Label>
            <Input type='text' name='email' />
          </FormGroup>
          <FormGroup>
            <Label for='description'>Password</Label>
            <Input type='password' name='password' />
          </FormGroup>
          <br />
          <Button color='primary' type='submit'>
            Log In
          </Button>
        </form>
      </div>
      <Footer />
    </>
  )
}
