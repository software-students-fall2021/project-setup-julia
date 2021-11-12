import React, { useState } from "react";

import { FormGroup, Label, Input, FormText, Button } from "reactstrap";
import "./VendorProfileForm.css";
import axios from "axios";
import { useHistory } from "react-router-dom";

const UserProfileForm = () => {
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const requestData = {
      username: e.target.username.value, // gets the value of the field in the submitted form with name='username'
      password: e.target.password.value, // gets the value of the field in the submitted form with name='password',
    };

    try {
      const response = await axios.post(
        "http://localhost:5000/UserProfileForm",
        requestData
      );

      console.log(response);

      history.push("/UserProfile");
    } catch (err) {
      // throw an error
      console.log(err);
      throw new Error(err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormGroup>
        <Label for="username">Name</Label>
        <Input type="text" name="name" id="username" />
      </FormGroup>
      <br />
      <FormGroup>
        <Label for="password">Password</Label>
        <Input type="text" name="password" id="password" />
      </FormGroup>
      <br />
      <Button color="primary" type="submit">
        Save Changes
      </Button>
    </form>
  );
};

export default UserProfileForm;
