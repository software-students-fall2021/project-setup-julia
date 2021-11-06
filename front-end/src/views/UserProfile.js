import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardText,
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

import Image from "react-bootstrap/Image";
import Navigation from "components/Navigation.js";
import About_header from "components/About_header.js";
import Footer from "components/Footer.js";
import Following_row from "components/Following_row";

const ColoredLine = ({ color }) => (
  <hr
    style={{
      color: color,
      backgroundColor: color,
      height: 2,
    }}
  />
);

function UserProfile() {
  return (
    <>
      <Navigation />
      <About_header />
      <br></br>
      <br></br>
      <br></br>
      <br></br>

      <Container>
        <Row>
          <Col xs={6} md={3}>
            <Image src="https://picsum.photos/200/200" roundedCircle />
          </Col>

          <Col>
            <h2>@username</h2>
            <Button className="btn-link" color="gray" href="/UserFollowing">
              <h3>Following:</h3>
            </Button>
            <br></br>
            <br></br>
            <Button color="gray" href="/UserEditProfile">
              Edit Profile
            </Button>
            <CardText> 
              <small className="text-muted">
                <a href='#ReportProfile'>
                  Report Profile
                </a>
              </small>
            </CardText>
          </Col>
        </Row>
        <ColoredLine color="gray" />
        <Following_row></Following_row>
        <br></br>
        <Following_row></Following_row>
        <br></br>
        <Following_row></Following_row>
        <br></br>
        <Following_row></Following_row>
        <br></br>
        <Following_row></Following_row>
      </Container>
      <Footer />
    </>
  );
}

export default UserProfile;
