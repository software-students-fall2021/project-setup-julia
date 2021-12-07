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
  let subtitle;
  const [reporterName, setReporter] = useState(null)
  const [reportedName, setReported] = useState(null)
  const [message, setMessage] = useState("Report Failed!")
  const [profile, setProfile] = useState({});

  const jwtToken = localStorage.getItem("token") // the JWT token, if we have already received one and stored it in localStorage
  console.log(`JWT token: ${jwtToken}`) // debugging

  //load user data

  useEffect(() =>{
    axios.get('http://localhost:5000/user-profile', 
    {headers: {Authorization: `JWT ${jwtToken}`}},
    )
    .then(res =>{
      console.log(res);
      setProfile(res.data.user);
    })
    .catch(err =>{
      console.log(err)
    })
    
  }, [])


  const handleReports = (reporter, reported) => {
    console.log("The report function has been run!")
    setReported(reported)
    setReporter(reporter)
  } ;

  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00';
  }

  function closeModal() {
    setIsOpen(false);
  }

  useEffect(() => {

    
    if(reportedName !== null)
    {
      axios.post( 'http://localhost:5000/reportaccount', {
          isVendor: false,
          reporterID: reporterName,
          reportedID: reportedName
      })
      .then((res) => {
          setMessage(res.data)
          openModal()
      })
    }
  }, [reporterName])
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
            <Button color="gray" href="/UserEditProfile">
              Edit Profile
            </Button>
            <CardText> 
              <small className="text-muted">
                <p onClick={() => handleReports("test", "test")}>
                  Report Profile
                </p>
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

      <div>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Report"
      >
        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>
          {message}
        </h2>
        <br></br>
        <button onClick={closeModal}>
          Okay
        </button>
      </Modal>
    </div>
    </>
  );
}

export default UserProfile;
