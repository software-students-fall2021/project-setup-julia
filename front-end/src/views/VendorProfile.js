import React, {useState, useEffect} from "react";

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
import axios from "axios";

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
  const [profile, setProfile] = useState({
    name : "",
    category: "",
    subcategories : [],
    location : "",
    hours : "",
    menu : "",
    description: ""
  })

  try{
    console.log("fetching vendor information");
    const fetchVendor = async() =>{
      const response = await axios.get('http://localhost:5000/vendorprofile')
      console.log(response.data);
      setProfile(response.data)
    }
    fetchVendor()
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
            <Button color="gray" href="/EditVendorProfile">
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
              {profile.description}
            </div>
          </h4>
        </Row>
        <br></br>
        <Row>
          <VendorCarousel></VendorCarousel>
        </Row>
        <Row>
          <h4>
            <strong>Category: </strong>
            {profile.category}
          </h4>
        </Row>
        <br></br>
        <Row>
          <h4>
           <strong>Subcategory: </strong> 
           <ul>
           {
            profile.subcategories.map((subcategory) => (
             <li key = {subcategory}>{subcategory}</li>)) 
            }
          </ul>
            </h4>
        </Row>
       
        <Row>
          <h4>
            <strong>Location: </strong>
            {profile.location}
            </h4>
        </Row>
        <br></br>
        <Row>
          <h4>
            <strong>Hours: </strong>
            {profile.hours}
            </h4>
        </Row>
        <br></br>
        <Row>
          <h4>
            <strong>Menu: </strong>
            {profile.menu}
            </h4>
        </Row>
      </Container>

      <Footer />
    </>
  );
}

export default VendorProfile;
