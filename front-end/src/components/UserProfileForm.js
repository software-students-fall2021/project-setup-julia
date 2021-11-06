import React, { useState } from "react";

import { FormGroup, Label, Input, FormText, Button } from "reactstrap";
import "./VendorProfileForm.css";

function VendorProfileForm() {
  return (
    <form>
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
