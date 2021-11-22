import React, {useState, useEffect} from "react";

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


function Subcategories() {
  const [title, setTitle] = useState(0);
  useEffect(() => {
    let pathnameSections=window.location.pathname.split('/')
    let lastSection=(pathnameSections[pathnameSections.length-1])
    if(lastSection=="Fast%20Food")
    {
      lastSection="Fast Food"
    }
    if(lastSection=="Latin%20American")
    {
      lastSection="Latin American"
    }
    if(lastSection=="Subcategories")
    {
      lastSection="Other"
    }
    setTitle(lastSection);
  })
  return (
    <>
      <Navigation />
      <About_header />
      <br />
      <Container>
        <Row>
          <Col style={{textAlign: 'center'}}>
            <h2 className="title">
              {title}
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

export default Subcategories;
