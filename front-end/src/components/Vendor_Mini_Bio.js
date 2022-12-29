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
const jwtToken = localStorage.getItem("token")

function Vendor_Mini_Bio({fullName, location, hours, email}) {
  let subtitle;
  const [reporterName, setReporter] = useState(null)
  const [reportedName, setReported] = useState(null)
  const [message, setMessage] = useState("Report Failed!")

  const handleReports = (reported) => {
    axios.get('http://localhost:5000/user-profile', 
    {headers: {Authorization: `JWT ${jwtToken}`}},
    )
    .then(res =>{
      if (res.data.success){
        console.log(res.data.user.fullname)
        console.log(reported)
        setReporter(res.data.user.fullname)
        setReported(reported)
      }
      else{
        setReporter(null)
        setReported(reported)
      }
    })
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
  }, [reportedName])

  /*const [subcat, setSubcat] = useState(0);
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
    setSubcat(lastSection);
  })

  const [bio, setBio]=useState({
    name: "",
    //category: "",
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
  }*/
  return (
    <>
      <Row>
        <Card style={{ width: "30rem" }}>
          <CardImg top src="https://picsum.photos/1200/1200"></CardImg>
          <CardBody>
            <CardTitle>{fullName}</CardTitle>
            <CardText>
              {location} <br />
              {hours} <br />
              {email}
            </CardText>
            <Button style={{ color: "lightgray" }} href="/VendorProfile">
              <small>Jump to Vendor Profile</small>
            </Button>
            <CardText style={{textAlign: 'right'}}>
              <p onClick={() => handleReports(fullName)}>
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
