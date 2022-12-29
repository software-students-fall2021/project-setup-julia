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
import VendorProfileForm from "components/VendorProfileForm.js";

function EditVendorProfile() {
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
                                    My Vendor Profile
                                </h2>
                                <h5 className="description">
                                View and edit your Vendor Profile.
                                </h5>
                                <VendorProfileForm />
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

export default EditVendorProfile;