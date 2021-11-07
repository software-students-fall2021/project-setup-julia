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

const FoodBox = () => {
    return (
      
      <Card>
        <CardImg top src="https://picsum.photos/843/180" alt="..."/>
        <CardBody>
          <CardTitle>Food</CardTitle>
          <br />
          <UncontrolledDropdown>
            <DropdownToggle aria-expanded={false} aria-haspopup={true} caret color="secondary" data-toggle="dropdown" href="#pablo" id="dropdownMenuLink" onClick={e => e.preventDefault()} role="button">See all Subcategories</DropdownToggle>
            <DropdownMenu aria-labelledby="dropdownMenuLink">
              <DropdownItem>
                <a href="/Subcategories">
                  Fast Food
                </a>
              </DropdownItem>
              <DropdownItem>
                <a href="/Subcategories">
                  Snacks
                </a>
              </DropdownItem>
              <DropdownItem>
                <a href="/Subcategories">
                  Breakfast
                </a>
              </DropdownItem>
              <DropdownItem>
                <a href="/Subcategories">
                  Drinks
                </a>
              </DropdownItem>
              <DropdownItem>
                <a href="/Subcategories">
                  Asian
                </a>
              </DropdownItem>
              <DropdownItem>
                <a href="/Subcategories">
                  African
                </a>
              </DropdownItem>
              <DropdownItem>
                <a href="/Subcategories">
                  Latin American
                </a>
              </DropdownItem>
              <DropdownItem>
                <a href="/Subcategories">
                  European
                </a>
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </CardBody>
      </Card>
      
    );
  };

export default FoodBox;

