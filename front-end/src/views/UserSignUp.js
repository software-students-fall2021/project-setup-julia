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
import UserSignUpForm from 'components/UserSignUpForm.js'

function UserSignUp() {
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
                <h2 className='title'>User Registration Form</h2>
                <UserSignUpForm />
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

export default UserSignUp
