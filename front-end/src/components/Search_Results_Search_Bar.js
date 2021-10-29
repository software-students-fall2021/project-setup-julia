import React from "react";

import {
  FormGroup,
  Input,
  Button
} from "reactstrap";

const Search_Results_Search_Bar = () => {
    return (
      <form>
        <FormGroup>
          <Input
            type="search"
            name="search"
            id="resultsSearch"
            placeholder="Search Again"
          />
        </FormGroup>
        <br />
        <Button color="default" size="sm">
          Search
        </Button>
      </form>
    );
  };

export default Search_Results_Search_Bar;