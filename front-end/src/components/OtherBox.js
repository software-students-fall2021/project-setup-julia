import React from "react";

import {
    Card,
    CardBody,
    CardTitle,
    CardText,
    CardImg,
    Button,
    ButtonGroup,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    UncontrolledDropdown
} from "reactstrap";

const OtherBox = () => {
    return (
      
      <Card>
        <CardImg top src="https://picsum.photos/843/180" alt="..."/>
        <CardBody>
          <CardTitle>Other</CardTitle>
          <br />
          <Button style={{ color: "lightgray" }} href="/Other">
              <small>View Vendors</small>
          </Button>
        </CardBody>
      </Card>
      
    );
  };

export default OtherBox;

