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
                                <h2 className="title">
                                    Meet the Team
                                </h2>
                            </Col>
                        </Row>
                        <Row>
                            <Col style={{textAlign: 'center'}}>
                                <img src="https://picsum.photos/200/300" />
                                <br />
                                <h2>
                                    Jaime
                                </h2>
                            </Col>
                            <Col style={{textAlign: 'center'}}>
                                <img src="https://picsum.photos/200/300" />
                                <br />
                                <h2>
                                    Shu
                                </h2>
                            </Col>
                            <Col style={{textAlign: 'center'}}>
                                <img src="https://picsum.photos/200/300" />
                                <br />
                                <h2>
                                    Michael
                                </h2>
                            </Col>
                        </Row>
                        <br />
                        <Row>
                            <Col style={{textAlign: 'center'}}>
                                <img src="https://picsum.photos/200/300" />
                                <br />
                                <h2>
                                    Taza
                                </h2>
                            </Col>
                            <Col style={{textAlign: 'center'}}>
                                <img src="https://picsum.photos/200/300" />
                                <br />
                                <h2>
                                    Terry
                                </h2>
                            </Col>
                            <Col style={{textAlign: 'center'}}>
                                <img src="https://picsum.photos/200/300" />
                                <br />
                                <h2>
                                    Julia
                                </h2>
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