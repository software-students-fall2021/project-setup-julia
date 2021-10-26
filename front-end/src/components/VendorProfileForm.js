import React from "react";

import {
  FormGroup,
  Label,
  Input,
  FormText,
  Button
} from "reactstrap";

const VendorProfileForm= () => {
  return (
    <form>
      <FormGroup>
        <Label for="vendorName">Vendor Name</Label>
        <Input
          type="name"
          name="name"
          id="vendorName"
          placeholder="Julia's Juice Stand"
        />
      </FormGroup>
      <br />
      <FormGroup>
        <Label for="description">Description</Label>
        <Input type="textarea" name="text" id="description" placeholder="Location, Hours, Product Information, etc..." />
      </FormGroup>
      <br />
      <Button color="primary" type="submit">
        Save Changes
      </Button>
    </form>
  );
};

export default VendorProfileForm;