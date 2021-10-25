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

function About() {
    return (
        <>
            <Navigation />
            <About_header />
            <div classname="main">
                <div classname="section text-center">
                    <Container>
                        <Row>
                            <Col style={{textAlign: 'center'}}>
                                <h2 className="title">About Whendor</h2>
                                <h5 className="description">
                                    We are wonderful NYU students who are passionate about killer app design and supporting small businesses.
                                </h5>
                                <h2 className="title">Meet the Team</h2>
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

export default About;