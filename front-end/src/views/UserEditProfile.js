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
import UserProfileForm from "components/UserProfileForm.js";

function UserEditProfile() {
  return (
    <>
      <Navigation />
      <About_header />
      <div classname="main">
        <div classname="section text-center">
          <Container>
            <Row>
              <Col style={{ textAlign: "center" }}>
                <h2 className="title">My Profile</h2>
                <h5 className="description">View and edit your profile.</h5>
                <UserProfileForm />
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

export default UserEditProfile;
