import React, { useState } from "react";

import { FormGroup, Label, Input, FormText, Button } from "reactstrap";
import "./VendorProfileForm.css";
import axios from "axios";

const handleSubmit = async (e) => {
  e.preventDefault();

  const username = e.target.name.value;

  const formData = new FormData();
  formData.append("username", username);

  try {
    const response = await axios({
      method: "post",
      url: "/UserProfileForm",
      data: formData,
    });
  } catch (err) {
    // throw an error
    throw new Error(err);
  }
};

function VendorProfileForm() {
  return (
    <form onSubmit={handleSubmit}>
      <FormGroup>
        <Label for="userName">Name</Label>
        <Input type="name" name="name" id="userName" />
      </FormGroup>
      <br />
      <Button color="primary" type="submit">
        Save Changes
      </Button>
    </form>
  );
}

export default VendorProfileForm;
