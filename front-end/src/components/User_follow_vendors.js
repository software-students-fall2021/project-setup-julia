import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardTitle,
  CardImg,
  CardText,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
} from "reactstrap";

import Image from "react-bootstrap/Image";

//Including post request functions from onclick_axios.js
import {Report_Account, Output_Popup } from "./onclick_axios"

function User_follow_vendors() {
  return (
    <>
      <Row>
        <Card>
          <CardImg top src="https://picsum.photos/843/180"></CardImg>
          <CardBody>
            <CardTitle>Vendor 1</CardTitle>
            <CardText>
              Eu ipsum laboris laborum enim voluptate laborum laborum amet est
              ipsum.
            </CardText>
            <CardText>
              <small className="text-muted">
                Category: Subcategory
              </small>
            </CardText>
            <a href='#ReportVendor' onclick="Report_Account(false, null, null, '/UserFollowing#ReportVendor')">
              Report Vendor
            </a> 
          </CardBody>
        </Card>
      </Row>
    </>
  );
}

export default User_follow_vendors;
