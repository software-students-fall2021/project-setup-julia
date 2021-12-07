import React, { useEffect, useState } from "react";

import { FormGroup, Label, Input, FormText, Button } from "reactstrap";
import "./VendorProfileForm.css";
import axios from "axios";
import { useHistory } from "react-router-dom";

const UserProfileForm = () => {
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();

    //TO-DO: check currentPassword with database, make sure logged in
    if (e.target.newPassword1.value!=e.target.newPassword2.value){
      const error = new Error("New passwords do not match. Please try again.")
      alert(error)
      console.log(error)
      return error
    }
    const requestData = {
      username: e.target.username.value,    //submitted value with name = "username"
      currentPassword: e.target.password.value,
      newPassword1: e.target.newPassword1.value,
      newPassword2: e.target.newPassword2.value
    };


    try {
      const response = await axios.post(
        "http://localhost:5000/user-profile-form",
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
      <FormGroup>
        <Label for="password">Current Password</Label>
        <Input type="password" name="password" id="password" autoComplete="off"/>
      </FormGroup>
      <br />
      <FormGroup>
        <Label for="newPassword1">New Password</Label>
        <Input type="text" name="newPassword1" id="newPassword1" />
      </FormGroup>
      <FormGroup>
        <Label for="newPassword2">Confirm New Password</Label>
        <Input type="text" name="newPassword2" id="newPassword2" />
      </FormGroup>
      <br />
      <Button color="primary" type="submit">
        Save Changes
      </Button>
    </form>
  );
};

export default UserProfileForm;
