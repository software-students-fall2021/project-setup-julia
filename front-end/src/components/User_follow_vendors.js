import React, { useState, useEffect } from "react";
import axios from "axios";
import Modal from 'react-modal';

// reactstrap components
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardTitle,
  CardImg,
  CardText,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
} from "reactstrap";

import Image from "react-bootstrap/Image";

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
  overlay: {zIndex: 1000}
};

Modal.setAppElement('#root');

function User_follow_vendors() {
  let subtitle;

  return (
    <>
      <Row>
        <Card>
          <CardImg top src="https://picsum.photos/843/180"></CardImg>
          <CardBody>
            <CardTitle>Vendor 1</CardTitle>
            <CardText>
              Eu ipsum laboris laborum enim voluptate laborum laborum amet est
              ipsum.
            </CardText>
            <CardText>
              <small className="text-muted">
                Category: Subcategory
              </small>
            </CardText>
          </CardBody>
        </Card>
      </Row>
    </>
  );
}

export default User_follow_vendors;
