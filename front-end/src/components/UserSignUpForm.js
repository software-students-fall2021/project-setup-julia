import React from 'react'

import { FormGroup, Label, Input, FormText, Button } from 'reactstrap'

const UserSignUpForm = () => {
  return (
    <form>
      <FormGroup>
        <Label for='description'>Full Name</Label>
        <Input type='text' name='text' id='description' />
      </FormGroup>
      <FormGroup>
        <Label for='description'>Email</Label>
        <Input type='text' name='text' id='description' />
      </FormGroup>
      <FormGroup>
        <Label for='description'>Username</Label>
        <Input type='text' name='text' id='description' />
      </FormGroup>
      <FormGroup>
        <Label for='description'>Password</Label>
        <Input type='text' name='text' id='description' />
      </FormGroup>
      <br />
      <Button color='primary' type='submit'>
        Sign Up
      </Button>
    </form>
  )
}

export default UserSignUpForm
