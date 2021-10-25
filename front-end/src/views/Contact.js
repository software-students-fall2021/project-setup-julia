import React from "react";

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
} from "reactstrap";

import Navigation from "components/Navigation.js";
import About_header from "components/About_header.js";
import Footer from "components/Footer.js";
import Contact_Form from "components/Contact_Form.js";

function Contact() {
    return (
        <>
            <Navigation />
            <About_header />
            <div classname="main">
                <div classname="section text-center">
                    <Container>
                        <Row>
                            <Col style={{textAlign: 'center'}}>
                                <h2 className="title">Contact Us</h2>
                                <h5 className="description">
                                    Please fill in the form below to contact us.
                                </h5>
                                <Contact_Form />
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
            <br />
            <Footer />
        </>
    );
}

export default Contact;