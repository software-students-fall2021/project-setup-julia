import React, { useState, useEffect } from "react";
import axios from "axios";
import Modal from 'react-modal';

// reactstrap components
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

import Image from "react-bootstrap/Image";

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

function User_follow_vendors() {
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
  return (
    <>
      <Row>
        <Card>
          <CardImg top src="https://picsum.photos/843/180"></CardImg>
          <CardBody>
            <CardTitle>Vendor 1</CardTitle>
            <CardText>
              Eu ipsum laboris laborum enim voluptate laborum laborum amet est
              ipsum.
            </CardText>
            <CardText>
              <small className="text-muted">
                Category: Subcategory
              </small>
            </CardText>
            <p onClick={() => handleReports("test", "test")}>
              Report Vendor
            </p> 
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

export default User_follow_vendors;
