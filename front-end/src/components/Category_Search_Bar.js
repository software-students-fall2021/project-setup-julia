import React from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

import { FormGroup, Label, Input, FormText, Button } from "reactstrap";

function Search() {
  const history = useHistory();
  const handleSubmit = async (e) => {
    // prevent the HTML form from actually submitting... we use React's javascript code instead
    e.preventDefault();

    try {
      // create an object with the data we want to send to the server
      const requestData = {
        search: e.target.search.value,
      };

      const response = await axios.post(
        "http://localhost:5000/search",
        requestData
      );

      const matchedVendors = response.data.results;
    } catch (err) {
      // throw an error
      console.log(err);
      throw new Error(err);
    }
  };
}

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
        <a href="/SearchResults">Search</a>
      </Button>
    </form>
  );
};

export default Category_Search_Bar;
