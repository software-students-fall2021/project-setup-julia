import React from "react";

// reactstrap components
import {
  Button,
  ButtonGroup,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown
} from "reactstrap";

function Home_dropdown(){
  return (
    <div class="btn-group">
      <UncontrolledDropdown>
        <DropdownToggle
          aria-expanded={false}
          aria-haspopup={true}
          caret
          color="secondary"
          data-toggle="dropdown"
          href="#pablo"
          id="dropdownMenuLink"
          onClick={e => e.preventDefault()}
          role="button"
        >
          select one
        </DropdownToggle>
        <DropdownMenu aria-labelledby="dropdownMenuLink">
          <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
            Food Vendor
          </DropdownItem>
          <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
            Fresh Grocery Vendor
          </DropdownItem>
          <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
            Other Vendor
          </DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>
    </div>
  );
}

export default Home_dropdown;