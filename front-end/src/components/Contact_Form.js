import React from "react";

import {
  FormGroup,
  Label,
  Input,
  FormText,
  Button
} from "reactstrap";

const Contact_Form = () => {
  return (
    <form>
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