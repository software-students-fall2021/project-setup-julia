import React from 'react'
import axios from 'axios'
import Swal from 'sweetalert2'
import { useHistory } from 'react-router-dom'

import {
  FormGroup,
  Label,
  Input,
  FormText,
  Button
} from "reactstrap";

const Contact_Form = () => {

  const history = useHistory()

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      // create an object with the data we want to send to the server
      const requestData = {
        email: e.target.email.value,
        password: e.target.text.value,
      }

      const response = await axios.post(
        'http://localhost:5000/userSignUp',
        requestData
      )
      // store the response data into the data state variable
      console.log(response)

      Swal.fire(
        'Success!',
        "Form successfully submitted",
        'success'
      )
      //redirect user to the contact page
      history.push('/Contact')
    } catch (err) {
      // throw an error
      console.log(err)
      throw new Error(err)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <FormGroup>
        <Label for="exampleEmail">
          Email address
        </Label>
        <Input
          type="email"
          name="email"
          id="exampleEmail"
          placeholder="Enter email"
        />
        <FormText color="muted">
          We'll never share your email with anyone else.
        </FormText>
      </FormGroup>
      <br />
      <FormGroup>
        <Label for="exampleText">
          Message
        </Label>
        <Input type="textarea" name="text" id="exampleText" />
      </FormGroup>
      <br />
      <Button color="primary" type="submit">
        Submit
      </Button>
    </form>
  );
};

export default Contact_Form;