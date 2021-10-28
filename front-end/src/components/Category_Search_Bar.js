import React from "react";

import {
  FormGroup,
  Label,
  Input,
  FormText,
  Button
} from "reactstrap";

const Category_Search_Bar = () => {
    return (
      <form>
        <FormGroup>
          <Input
            type="search"
            name="search"
            id="categorySearch"
            placeholder="Search Category"
          />
        </FormGroup>
        <br />
        <Button color="default" size="sm">
          Search
        </Button>
      </form>
    );
  };

export default Category_Search_Bar;