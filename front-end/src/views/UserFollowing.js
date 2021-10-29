import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardTitle,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
} from "reactstrap";

import Navigation from "components/Navigation.js";
import About_header from "components/About_header.js";
import Footer from "components/Footer.js";
import User_follow_vendors from "components/User_follow_vendors";

function UserFollowing() {
  return (
    <>
      <Navigation />
      <About_header />
      <br></br>
      <Container>
        <Row>
          <h2>
            Following:
          </h2>
        </Row>
        <br></br>
        <User_follow_vendors></User_follow_vendors>
        <User_follow_vendors></User_follow_vendors>
        <User_follow_vendors></User_follow_vendors>
        <User_follow_vendors></User_follow_vendors>
        <User_follow_vendors></User_follow_vendors>
      </Container>
    </>
  );
}

export default UserFollowing;
