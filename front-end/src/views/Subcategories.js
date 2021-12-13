import React, {useState, useEffect} from "react";
import axios from "axios";

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
  /*const [title, setTitle] = useState(0);
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
  })*/
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
  const [bio1, setBio1]=useState({
    fullName: "",
    location: "",
    hours: "",
    email: "",
  })
  const [bio2, setBio2]=useState({
    fullName: "",
    location: "",
    hours: "",
    email: "",
  })
  try{
    console.log("fetching vendor information");
    const fetchBio = async() =>{
      const response = await axios.get('http://localhost:5000/minibio')
      console.log(response)
      setBio1(response.data[0])
      setBio2(response.data[1])
    }
    fetchBio()
  }
  catch (err) {
    // throw an error
    console.log(err);
    throw new Error(err);
  }

  return (
    <>
      <Navigation />
      <About_header />
      <br />
      <Container>
        <Row>
          <Col style={{textAlign: 'center'}}>
            <h2 className="title">
              {lastSection}
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
            <Vendor_Mini_Bio fullName={bio1.fullName} location={bio1.location} hours={bio1.hours} email={bio1.email} />
          </Col>
        </Row>
        <br />
        <Row>
          <Col>
            <Vendor_Mini_Bio fullName={bio2.fullName} location={bio2.location} hours={bio2.hours} email={bio2.email} />
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
