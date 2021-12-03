import React, { useState, useEffect } from "react";
import axios from "axios";
import Modal from 'react-modal';

import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardTitle,
  CardImg,
  CardText,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
} from "reactstrap";

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

function Vendor_Mini_Bio() {
  let subtitle;
  const [reporterName, setReporter] = useState(null)
  const [reportedName, setReported] = useState(null)
  const [message, setMessage] = useState("Report Failed!")

  const handleReports = (reporter, reported) => {
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

    console.log("The report function has been run!")
    if(reportedName !== null)
    {
      axios.post( 'http://localhost:5000/reportaccount', {
          isVendor: true,
          reporterID: reporterName,
          reportedID: reportedName
      })
      .then((res) => {
          setMessage(res.data.report)
          openModal()
      })
    }
  }, [reporterName])

  const [bio, setBio]=useState({
    name: "",
    category: "",
    location: "",
    hours: "",
    contactinfo: ""
  })
  try{
    console.log("fetching vendor information");
    const fetchBio = async() =>{
      const response = await axios.get('http://localhost:5000/minibio')
      setBio(response.data)
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
      <Row>
        <Card style={{ width: "30rem" }}>
          <CardImg top src="https://picsum.photos/1200/1200"></CardImg>
          <CardBody>
            <CardTitle>{bio.name}</CardTitle>
            <CardText>
              {bio.location} <br />
              {bio.hours} <br />
              {bio.contactinfo}
            </CardText>
            <Button style={{ color: "lightgray" }} href="/VendorProfile">
              <small>Jump to Vendor Profile</small>
            </Button>
            <CardText style={{textAlign: 'right'}}>
              <p onClick={() => handleReports("test", "test")}>
                Report Vendor
              </p>
            </CardText>
          </CardBody>
        </Card>
      </Row>

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

export default Vendor_Mini_Bio;
