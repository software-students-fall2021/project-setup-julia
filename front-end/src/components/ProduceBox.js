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

const ProduceBox = () => {
    return (
      
      <Card>
        <CardImg top src="https://picsum.photos/843/180" alt="..."/>
        <CardBody>
          <CardTitle>Produce</CardTitle>
          <br />
          <UncontrolledDropdown>
            <DropdownToggle aria-expanded={false} aria-haspopup={true} caret color="secondary" data-toggle="dropdown" href="#pablo" id="dropdownMenuLink" onClick={e => e.preventDefault()} role="button">See all Subcategories</DropdownToggle>
            <DropdownMenu aria-labelledby="dropdownMenuLink">
              <DropdownItem>
                <a href="/Subcategories">
                  Fruits
                </a>
              </DropdownItem>
              <DropdownItem>
                <a href="/Subcategories">
                  Vegetables
                </a>
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </CardBody>
      </Card>
      
    );
  };

export default ProduceBox;

