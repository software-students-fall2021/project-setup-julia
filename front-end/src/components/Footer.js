import React from "react";

// reactstrap components
import { Row, Container } from "reactstrap";

function Footer() {
  return (
    <footer className="footer footer-black footer-white">
      <Container>
        <Row>
          <nav className="footer-nav" style={{textAlign: 'center'}}>
            <ul>
              <li>
                <a
                  href="#About_Us"
                  target="_blank"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#Contact_Us"
                  target="_blank"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </nav>
          <div className="credits ms-auto">
            <span className="copyright">
              © {new Date().getFullYear()}, Whendor
            </span>
          </div>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;

