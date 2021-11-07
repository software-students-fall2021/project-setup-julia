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

const AccessoriesBox = () => {
    return (
      
      <Card>
        <CardImg top src="https://picsum.photos/843/180" alt="..."/>
        <CardBody>
          <CardTitle>Accessories</CardTitle>
          <br />
          <UncontrolledDropdown>
            <DropdownToggle aria-expanded={false} aria-haspopup={true} caret color="secondary" data-toggle="dropdown" href="#pablo" id="dropdownMenuLink" onClick={e => e.preventDefault()} role="button">See all Subcategories</DropdownToggle>
            <DropdownMenu aria-labelledby="dropdownMenuLink">
              <DropdownItem>
                <a href="/Jewelry">
                  Jewelry
                </a>
              </DropdownItem>
              <DropdownItem>
                <a href="/Masks">
                  Masks
                </a>
              </DropdownItem>
              <DropdownItem>
                <a href="/Hair">
                  Hair
                </a>
              </DropdownItem>
              <DropdownItem>
                <a href="/Makeup">
                  Makeup
                </a>
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </CardBody>
      </Card>
      
    );
  };

export default AccessoriesBox;

