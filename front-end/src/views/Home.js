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

import Home_header from "components/Home_header.js";
import Navigation from "components/Navigation.js";
import Home_dropdown from "components/Home_dropdown.js";
import Footer from "components/Footer.js";

function Home() {
    
    
    return (
        <>
            <Navigation />
            <Home_header />
            <div classname="main">
                <div classname="section text-center">
                    <Container>
                        <Row>
                            <Col style={{textAlign: 'center'}}>
                                <h2 className="title">Get Started</h2>
                                <h5 className="description">
                                    Find a local vendor right now
                                </h5>
                            </Col>
                            <br />
                            <br />
                            <div style={{textAlign: 'center'}}>
                                <Home_dropdown /> 
                            </div>
                        </Row>
                    </Container>
                </div>
            </div>
            <br />
            <Footer />
        </>
    );
}

export default Home;