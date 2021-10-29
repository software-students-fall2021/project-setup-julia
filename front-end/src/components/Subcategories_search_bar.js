import React from "react";

import {
  FormGroup,
  Label,
  Input,
  FormText,
  Button
} from "reactstrap";

const Subcategories_Search_Bar = () => {
    return (
      <form>
        <FormGroup>
          <Input
            type="search"
            name="search"
            id="subcategorySearch"
            placeholder="Search Vendor"
          />
        </FormGroup>
        <br />
        <Button color="default" size="sm">
          <a href="/SearchResults">Search</a>
        </Button>
      </form>
    );
  };

export default Subcategories_Search_Bar;