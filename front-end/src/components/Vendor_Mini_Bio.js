import React, { useState, useEffect } from "react";
import axios from "axios";

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

//Including post request functions from onclick_axios.js
import {Report_Account, Output_Popup } from "./onclick_axios"


function Vendor_Mini_Bio() {
  const [reporterName, setReporter] = useState(null)
  const [reportedName, setReported] = useState(null)

  useEffect(() => {

    console.log("The report function has been run!")
    if(reportedName !== null)
    {
      axios.post( 'localhost:5000/reportaccount', {
          isVendor: true,
          reporterID: reporterName,
          reportedID: reportedName
      })
      .then((res) => {
          const toggle = (isOpen) => {
              isOpen = !isOpen;
          }
          return Output_Popup("Reported", res.body.message, "Okay", toggle, true)
      })
    }
  }, [reporterName])

  return (
    <>
      <Row>
        <Card style={{ width: "30rem" }}>
          <CardImg top src="https://picsum.photos/1200/1200"></CardImg>
          <CardBody>
            <CardTitle>Vendor Name</CardTitle>
            <CardText>
              Location <br />
              Today's Business Hours <br />
              Contact Info
            </CardText>
            <Button style={{ color: "lightgray" }} href="/VendorProfile">
              <small>Jump to Vendor Profile</small>
            </Button>
            <CardText style={{textAlign: 'right'}}>
              <p onClick={() => { setReported("test"); setReporter("test") }}>
                Report Vendor
              </p>
            </CardText>
          </CardBody>
        </Card>
      </Row>
    </>
  );
}

export default Vendor_Mini_Bio;
