import React from "react";

import {
    Container,
    Row,
    Col
} from "reactstrap";

import Navigation from "components/Navigation.js";
import About_header from "components/About_header.js";
import Footer from "components/Footer.js";
import Search_Results_Search_Bar from "components/Search_Results_Search_Bar.js"

function SearchResults() {
    return (
        <>
            <Navigation />
            <About_header />
            <div classname="main">
                <div classname="section text-center">
                    <Container>
                        <Row>
                            <Col>
                                <h2 className="title">
                                    Results for lorem ipsum
                                </h2>
                                <Search_Results_Search_Bar />
                            </Col>
                        </Row>
                        <br />
                        <Row>
                            <Col>
                                -lorem ipsum
                            </Col>
                        </Row>
                        <br />
                        <Row>
                            <Col>
                                -lorem ipsum
                            </Col>
                        </Row>
                        <br />
                        <Row>
                            <Col>
                                -lorem ipsum
                            </Col>
                        </Row>
                        <br />
                        <Row>
                            <Col>
                                -lorem ipsum
                            </Col>
                        </Row>
                        <br />
                        <Row>
                            <Col>
                                -lorem ipsum
                            </Col>
                        </Row>
                        <br />
                        <Row>
                            <Col>
                                -lorem ipsum
                            </Col>
                        </Row>
                        <br />
                        <Row>
                            <Col>
                                -lorem ipsum
                            </Col>
                        </Row>
                        <br />
                        <Row>
                            <Col>
                                -lorem ipsum
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

export default SearchResults;