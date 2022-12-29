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
import Swal from "sweetalert2";
import { useHistory } from 'react-router-dom'

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
  const history = useHistory()
  const [profile, setProfile] = useState({
    businessName : "",
    vendorCategory: "",
    vendorSubcategory : [""],
    location : "",
    hours : "",
    menu : "",
    description: ""
  })
  const [authorized, setAuthorized] = useState(false);


  const jwtToken = localStorage.getItem("token") // the JWT token, if we have already received one and stored it in localStorage
  console.log(jwtToken)
  useEffect(() =>{
    axios.get('http://localhost:5000/vendor-profile', 
    {headers: {Authorization: `JWT ${jwtToken}`}},
    )
    //axios.get('http://localhost:5000/samplevendorprofile')
    .then(res =>{
      console.log(res);
      if (res.data.success){
        setProfile(res.data.vendor);
        setAuthorized(true);
      }
      else{
        
        setAuthorized(false)
      }
    })
    .catch(err =>{
      console.log(err)
    })
    
  }, [])

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
            <h2>{profile.businessName}</h2>
            <Button className="btn-link" color="gray" href="/UserFollowing">
              <h3>Followers</h3>
            </Button>
            <br></br>
            <br></br>
            {
              authorized? 
                <Button color="gray" href="/EditVendorProfile">
                Edit Profile
              </Button>
              : null
            }

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
            {profile.vendorCategory}
          </h4>
        </Row>
        <br></br>
        <Row>
          <h4>
           <strong>Subcategory: </strong> 
           <ul>
           {
            profile.vendorSubcategory.map((subcategory) => (
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
