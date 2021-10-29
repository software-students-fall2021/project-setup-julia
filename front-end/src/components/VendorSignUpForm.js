import React from 'react'

import { FormGroup, Label, Input, FormText, Button } from 'reactstrap'

const VendorSignUpForm = () => {
  return (
    <form>
      <FormGroup>
        <Label for='vendorName'>Business Name</Label>
        <Input
          type='name'
          name='name'
          id='vendorName'
          placeholder="Julia's Juice Stand"
        />
      </FormGroup>
      <br />
      <FormGroup>
        <Label for='vendorCategory'>Category</Label>
        <Input type='select' name='select' id='vendorCategory'>
          <option>Food</option>
          <option>Fruit and Vegetable</option>
          <option>Accessories</option>
          <option>Art</option>
          <option>Other</option>
        </Input>
      </FormGroup>
      <FormGroup>
        <Label for='location'>Location</Label>
        <Input
          type='textarea'
          name='text'
          id='location'
          placeholder='W 4th Street across from Stern Business School'
        />
      </FormGroup>
      <FormGroup>
        <Label for='hours'>Hours</Label>
        <Input
          type='textarea'
          name='text'
          id='hours'
          placeholder='Mondays-Saturday 9am-6pm'
        />
      </FormGroup>
      <FormGroup>
        <Label for='menu'>Menu</Label>
        <Input
          type='textarea'
          name='text'
          id='menu'
          placeholder='Green juice - $5'
        />
      </FormGroup>
      <FormGroup>
        <Label for='description'>Description</Label>
        <Input
          type='textarea'
          name='text'
          id='description'
          placeholder='Convenient, healthy, delicious green juices made to order by Julia!'
        />
      </FormGroup>
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
        Register My Business
      </Button>
    </form>
  )
}

export default VendorSignUpForm
