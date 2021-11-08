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
                <a href="/FastFood">
                  Fast Food
                </a>
              </DropdownItem>
              <DropdownItem>
                <a href="/Snacks">
                  Snacks
                </a>
              </DropdownItem>
              <DropdownItem>
                <a href="/Breakfast">
                  Breakfast
                </a>
              </DropdownItem>
              <DropdownItem>
                <a href="/Drinks">
                  Drinks
                </a>
              </DropdownItem>
              <DropdownItem>
                <a href="/Asian">
                  Asian
                </a>
              </DropdownItem>
              <DropdownItem>
                <a href="/African">
                  African
                </a>
              </DropdownItem>
              <DropdownItem>
                <a href="/LatinAmerican">
                  Latin American
                </a>
              </DropdownItem>
              <DropdownItem>
                <a href="/European">
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

