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
import VendorCarousel from "components/VendorCarousel";

const ColoredLine = ({ color }) => (
  <hr
    style={{
      color: color,
      backgroundColor: color,
      height: 2,
    }}
  />
);

function VendorProfile() {
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
            <h2>Vendor Name</h2>
            <Button className="btn-link" color="gray" href="/UserFollowing">
              <h3>Followers</h3>
            </Button>
            <br></br>
            <br></br>
            <Button color="gray" href="/VendorSideProfile">
              Edit Profile
            </Button>
          </Col>
        </Row>
        <br></br>
        <br></br>
        <Row>
          <h4>
            <strong>Description:</strong>
            <div>
              <br></br>
              Commodo aliqua ad duis aute sunt.Id irure ullamco elit et nisi
              ipsum Lorem Lorem ea eiusmod minim ad minim aliquip. Consequat
              occaecat eu dolor minim mollit anim commodo mollit. Cillum est est
              commodo qui dolor incididunt consectetur laboris consequat. Eu in
              Lorem tempor sint ut enim nostrud excepteur fugiat consequat nisi
              consequat. Aliquip voluptate sit ut aliquip et nulla tempor duis
              qui.
            </div>
          </h4>
        </Row>
        <br></br>
        <Row>
          <VendorCarousel></VendorCarousel>
        </Row>
        <Row>
          <h3>Category: </h3>
        </Row>
        <br></br>
        <Row>
          <h4>SubCategory: </h4>
        </Row>
        <br></br>
        <Row>
          <h4>Location: </h4>
        </Row>
        <br></br>
        <Row>
          <h4>Hours: </h4>
        </Row>
        <br></br>
        <Row>
          <h4>Menu: </h4>
        </Row>
      </Container>

      <Footer />
    </>
  );
}

export default VendorProfile;
