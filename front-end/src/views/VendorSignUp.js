import React from 'react'

// reactstrap components
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
} from 'reactstrap'

import Footer from 'components/Footer.js'
import Navigation from 'components/Navigation.js'
import About_header from 'components/About_header.js'
import VendorSignUpForm from 'components/VendorSignUpForm.js'

function VendorSignUp() {
  return (
    <>
      <Navigation />
      <About_header />
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <div classname='main'>
        <div classname='section text-center'>
          <Container>
            <Row>
              <Col style={{ textAlign: 'center' }}>
                <h2 className='title'>Vendor Registration Form</h2>
                <h5 className='description'>
                  Please fill this form so we can accomodate your business
                  effectively
                </h5>
                <VendorSignUpForm />
              </Col>
            </Row>
          </Container>
        </div>
      </div>
      <br />
      <Footer />
    </>
  )
}

export default VendorSignUp
