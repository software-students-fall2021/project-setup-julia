import React from "react";

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

import Image from "react-bootstrap/Image";
import Navigation from "components/Navigation.js";
import About_header from "components/About_header.js";
import Footer from "components/Footer.js";
import Subcategories_Dropdown from "components/Subcategories_Dropdown.js";
import Subcategories_Search_Bar from "components/Subcategories_search_bar.js"
import Vendor_Mini_Bio from "components/Vendor_Mini_Bio.js";


function Asian() {
  return (
    <>
      <Navigation />
      <About_header />
      <br />
      <Container>
        <Row>
          <Col style={{textAlign: 'center'}}>
            <h2 className="title">
              Asian
            </h2>
            <Subcategories_Search_Bar />
          </Col>
        </Row>
        <br />
        <Row>
          <Col>
            <Subcategories_Dropdown />
          </Col>
        </Row>
        <br />
        <Row>
          <Col>
            <Vendor_Mini_Bio />
          </Col>
        </Row>
        <br />
        <Row>
          <Col>
            <Vendor_Mini_Bio />
          </Col>
        </Row>
        <br />
        <Row>
          <Col>
            <Vendor_Mini_Bio />
          </Col>
        </Row>
        <br />
        <Row>
          <Col>
            <Vendor_Mini_Bio />
          </Col>
        </Row>
        <br />
        <Row>
          <Col>
            <Vendor_Mini_Bio />
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
}

export default Asian;