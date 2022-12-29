import React, { useState, useEffect } from "react";
import axios from "axios";
import Modal from 'react-modal';

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
import Swal from "sweetalert2";
import { useHistory } from 'react-router-dom'

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
  overlay: {zIndex: 1000}
};

Modal.setAppElement('#root');

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
  const history = useHistory()
  let subtitle;
  const [profile, setProfile] = useState({
    username : ""
  });
  const [authorized, setAuthorized] = useState(false)

  const jwtToken = localStorage.getItem("token") // the JWT token, if we have already received one and stored it in localStorage
  console.log(`JWT token: ${jwtToken}`) // debugging

  //load user data

  useEffect(() =>{
    axios.get('http://localhost:5000/user-profile', 
    {headers: {Authorization: `JWT ${jwtToken}`}},
    )
    .then(res =>{
      console.log(res)
      if (res.data.success){
        setProfile(res.data.user);
        setAuthorized(true)
      }
      else{
        Swal.fire(
          res.data.message
        )
        console.log(res.data.message)
        setAuthorized(false)
        history.push("/Login");
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
            <h2>@{profile.username}</h2>
            <Button className="btn-link" color="gray" href="/UserFollowing">
              <h3>Following:</h3>
            </Button>
            <br></br>
            <br></br>
            {authorized?
              <Button color="gray" href="/UserEditProfile">
                Edit Profile
              </Button>
            : null}
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
