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
                                <h2 className="title">
                                    Categories
                                </h2>
                                <Category_Search_Bar />
                            </Col>
                        </Row>
                        <br />
                        <Row>
                            <Col>
                                <Categories_Boxes category="Food" num="8" subcat1="Fast Food" subcat2="Snacks" subcat3="Breakfast" subcat4="Drinks" subcat5="Asian" subcat6="African" subcat7="Latin American" subcat8="European" />
                            </Col>
                        </Row>
                        <br />
                        <Row>
                            <Col>
                                <Categories_Boxes category="Produce" num="2" subcat1="Fruits" subcat2="Vegetables" />
                            </Col>
                        </Row>
                        <br />
                        <Row>
                            <Col>
                                <Categories_Boxes category="Accessories" num="4" subcat1="Jewelry" subcat2="Masks" subcat3="Hair" subcat4="Makeup" />
                            </Col>
                        </Row>
                        <br />
                        <Row>
                            <Col>
                                <Categories_Boxes category="Art" num="2" subcat1="Paintings" subcat2="Photography" />
                            </Col>
                        </Row>
                        <br />
                        <Row>
                            <Col>
                                <Categories_Boxes category="Other" num="0" />
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