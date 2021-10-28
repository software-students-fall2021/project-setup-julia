import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardImg,
  CardImgOverlay,
  CardText,
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
import Categories_Boxes from "components/Categories_Boxes.js"
import Category_Search_Bar from "components/Category_Search_Bar.js"

function Vendors() {
    return (
        <>
            <Navigation />
            <About_header />
            <div classname="main">
                <div classname="section text-center">
                    <Container>
                        <Row>
                            <Col style={{textAlign: 'center'}}>
                                <h2 className="title">Categories</h2>
                                <Category_Search_Bar />
                            </Col>
                        </Row>
                        <br />
                        <Row>
                            <Col>
                                <Categories_Boxes />
                            </Col>
                        </Row>
                        <br />
                        <Row>
                            <Col>
                                <Categories_Boxes />
                            </Col>
                        </Row>
                        <br />
                        <Row>
                            <Col>
                                <Categories_Boxes />
                            </Col>
                        </Row>
                        <br />
                        <Row>
                            <Col>
                                <Categories_Boxes />
                            </Col>
                        </Row>
                    </Container>   
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Vendors;