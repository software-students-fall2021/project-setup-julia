import React, {useState, useEffect} from "react";
import axios from "axios";

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

import Image from "react-bootstrap/Image";
import Navigation from "components/Navigation.js";
import About_header from "components/About_header.js";
import Footer from "components/Footer.js";
import Subcategories_Dropdown from "components/Subcategories_Dropdown.js";
import Subcategories_Search_Bar from "components/Subcategories_search_bar.js"
import Vendor_Mini_Bio from "components/Vendor_Mini_Bio.js";


function Subcategories() {
  const [bio1, setBio1]=useState({
    fullName: "",
    location: "",
    hours: "",
    email: "",
  })
  const [bio2, setBio2]=useState({
    fullName: "",
    location: "",
    hours: "",
    email: "",
  })
  const [bio3, setBio3]=useState({
    fullName: "",
    location: "",
    hours: "",
    email: "",
  })
  const [bio4, setBio4]=useState({
    fullName: "",
    location: "",
    hours: "",
    email: "",
  })

  let pathnameSections=window.location.pathname.split('/')
  let lastSection=(pathnameSections[pathnameSections.length-1])
  
  useEffect(() => {
  if(lastSection=="Fast%20Food")
  {
    lastSection="Fast Food"
    try{
      console.log("fetching vendor information");
      const fetchBio = async() =>{
        const response = await axios.get('http://localhost:5000/minibio/fastFood')
        //console.log(response)
        let resLen=response.data.length
        if(resLen=2)
        {
          if(bio1 != response.data[0])
            setBio1(response.data[0])
          if(bio2 != response.data[1])
            setBio2(response.data[1])
        }
      }
      fetchBio()
    }
    catch (err) {
      // throw an error
      console.log(err);
      throw new Error(err);
    }
  }
  if(lastSection=="Latin%20American")
  {
    lastSection="Latin American"
    try{
      console.log("fetching vendor information");
      const fetchBio = async() =>{
        const response = await axios.get('http://localhost:5000/minibio/latinAmerican')
        console.log(response)
        let resLen=response.data.length
        if(resLen=2)
        {
          setBio1(response.data[0])
          setBio2(response.data[1])
        }
      }
      fetchBio()
    }
    catch (err) {
      // throw an error
      console.log(err);
      throw new Error(err);
    }
  }
  if(lastSection=="Subcategories")
  {
    lastSection="Other"
  }
  if(lastSection=="Snacks")
  {
    try{
      console.log("fetching vendor information");
      const fetchBio = async() =>{
        const response = await axios.get('http://localhost:5000/minibio/Snacks')
        console.log(response)
        let resLen=response.data.length
        if(resLen=2)
        {
          setBio1(response.data[0])
          setBio2(response.data[1])
        }
      }
      fetchBio()
    }
    catch (err) {
      // throw an error
      console.log(err);
      throw new Error(err);
    }
  }
  if(lastSection=="Breakfast")
  {
    try{
      console.log("fetching vendor information");
      const fetchBio = async() =>{
        const response = await axios.get('http://localhost:5000/minibio/Breakfast')
        console.log(response)
        let resLen=response.data.length
        if(resLen=2)
        {
          setBio1(response.data[0])
          setBio2(response.data[1])
        }
      }
      fetchBio()
    }
    catch (err) {
      // throw an error
      console.log(err);
      throw new Error(err);
    }
  }
  if(lastSection=="Drinks")
  {
    try{
      console.log("fetching vendor information");
      const fetchBio = async() =>{
        const response = await axios.get('http://localhost:5000/minibio/Drinks')
        console.log(response)
        let resLen=response.data.length
        if(resLen=1)
        {
          setBio1(response.data[0])
        }
      }
      fetchBio()
    }
    catch (err) {
      // throw an error
      console.log(err);
      throw new Error(err);
    }
  }
  if(lastSection=="Asian")
  {
    try{
      console.log("fetching vendor information");
      const fetchBio = async() =>{
        const response = await axios.get('http://localhost:5000/minibio/Asian')
        console.log(response)
        let resLen=response.data.length
        if(resLen=1)
        {
          setBio1(response.data[0])
        }
      }
      fetchBio()
    }
    catch (err) {
      // throw an error
      console.log(err);
      throw new Error(err);
    }
  }
  if(lastSection=="African")
  {
    try{
      console.log("fetching vendor information");
      const fetchBio = async() =>{
        const response = await axios.get('http://localhost:5000/minibio/African')
        console.log(response)
        let resLen=response.data.length
        if(resLen=1)
        {
          setBio1(response.data[0])
        }
      }
      fetchBio()
    }
    catch (err) {
      // throw an error
      console.log(err);
      throw new Error(err);
    }
  }
  if(lastSection=="European")
  {
    try{
      console.log("fetching vendor information");
      const fetchBio = async() =>{
        const response = await axios.get('http://localhost:5000/minibio/European')
        console.log(response)
        let resLen=response.data.length
        if(resLen=1)
        {
          setBio1(response.data[0])
        }
      }
      fetchBio()
    }
    catch (err) {
      // throw an error
      console.log(err);
      throw new Error(err);
    }
  }
  if(lastSection=="Fruits")
  {
    try{
      console.log("fetching vendor information");
      const fetchBio = async() =>{
        const response = await axios.get('http://localhost:5000/minibio/Fruits')
        console.log(response)
        let resLen=response.data.length
        if(resLen=1)
        {
          setBio1(response.data[0])
        }
      }
      fetchBio()
    }
    catch (err) {
      // throw an error
      console.log(err);
      throw new Error(err);
    }
  }
  if(lastSection=="Vegetables")
  {
    try{
      console.log("fetching vendor information");
      const fetchBio = async() =>{
        const response = await axios.get('http://localhost:5000/minibio/Vegetables')
        console.log(response)
        let resLen=response.data.length
        if(resLen=1)
        {
          setBio1(response.data[0])
        }
      }
      fetchBio()
    }
    catch (err) {
      // throw an error
      console.log(err);
      throw new Error(err);
    }
  }
  if(lastSection=="Jewelry")
  {
    try{
      console.log("fetching vendor information");
      const fetchBio = async() =>{
        const response = await axios.get('http://localhost:5000/minibio/Jewelry')
        console.log(response)
        let resLen=response.data.length
        if(resLen=1)
        {
          setBio1(response.data[0])
        }
      }
      fetchBio()
    }
    catch (err) {
      // throw an error
      console.log(err);
      throw new Error(err);
    }
  }
  if(lastSection=="Masks")
  {
    try{
      console.log("fetching vendor information");
      const fetchBio = async() =>{
        const response = await axios.get('http://localhost:5000/minibio/Masks')
        console.log(response)
        let resLen=response.data.length
        if(resLen=1)
        {
          setBio1(response.data[0])
        }
      }
      fetchBio()
    }
    catch (err) {
      // throw an error
      console.log(err);
      throw new Error(err);
    }
  }
  if(lastSection=="Hair")
  {
    try{
      console.log("fetching vendor information");
      const fetchBio = async() =>{
        const response = await axios.get('http://localhost:5000/minibio/Hair')
        console.log(response)
        let resLen=response.data.length
        if(resLen=1)
        {
          setBio1(response.data[0])
        }
      }
      fetchBio()
    }
    catch (err) {
      // throw an error
      console.log(err);
      throw new Error(err);
    }
  }
  if(lastSection=="Makeup")
  {
    try{
      console.log("fetching vendor information");
      const fetchBio = async() =>{
        const response = await axios.get('http://localhost:5000/minibio/Makeup')
        console.log(response)
        let resLen=response.data.length
        if(resLen=1)
        {
          setBio1(response.data[0])
        }
      }
      fetchBio()
    }
    catch (err) {
      // throw an error
      console.log(err);
      throw new Error(err);
    }
  }
  if(lastSection=="Paintings")
  {
    try{
      console.log("fetching vendor information");
      const fetchBio = async() =>{
        const response = await axios.get('http://localhost:5000/minibio/Paintings')
        console.log(response)
        let resLen=response.data.length
        if(resLen=1)
        {
          setBio1(response.data[0])
        }
      }
      fetchBio()
    }
    catch (err) {
      // throw an error
      console.log(err);
      throw new Error(err);
    }
  }
  if(lastSection=="Photography")
  {
    try{
      console.log("fetching vendor information");
      const fetchBio = async() =>{
        const response = await axios.get('http://localhost:5000/minibio/Photography')
        console.log(response)
        let resLen=response.data.length
        if(resLen=1)
        {
          setBio1(response.data[0])
        }
      }
      fetchBio()
    }
    catch (err) {
      // throw an error
      console.log(err);
      throw new Error(err);
    }
  }
}, []);

  /*try{
    console.log("fetching vendor information");
    const fetchBio = async() =>{
      const response = await axios.get('http://localhost:5000/minibio/Snacks')
      console.log(response)
      let resLen=response.data.length
      if(resLen=1)
      {
        setBio1(response.data[0])
      }
      else if(resLen=2)
      {
        setBio1(response.data[0])
        setBio2(response.data[1])
      }
      else if(resLen=3)
      {
        setBio1(response.data[0])
        setBio2(response.data[1])
        setBio3(response.data[2])
      }
      else if(resLen=4)
      {
        setBio1(response.data[0])
        setBio2(response.data[1])
        setBio3(response.data[2])
        setBio4(response.data[3])
      }
      
    }
    fetchBio()
  }
  catch (err) {
    // throw an error
    console.log(err);
    throw new Error(err);
  }*/

  if(bio1 && bio1.fullName && bio1.fullName.length !== 0) {
    return (
      <>
        <Navigation />
        <About_header />
        <br />
        <Container>
          <Row>
            <Col style={{textAlign: 'center'}}>
              <h2 className="title">
                {lastSection}
              </h2>
              <Subcategories_Search_Bar />
            </Col>
          </Row>
          <br />
          <Row>
            <Col>
              <Subcategories_Dropdown />
            </Col>
          </Row>
          <br />
          <Row>
            <Col>
              <Vendor_Mini_Bio fullName={bio1.fullName} location={bio1.location} hours={bio1.hours} email={bio1.email} />
            </Col>
          </Row>
          <br />
          <Row>
            <Col>
              <Vendor_Mini_Bio fullName={bio2.fullName} location={bio2.location} hours={bio2.hours} email={bio2.email} />
            </Col>
          </Row>
          <br />
          <Row>
            <Col>
              <Vendor_Mini_Bio fullName={bio3.fullName} location={bio3.location} hours={bio3.hours} email={bio3.email} />
            </Col>
          </Row>
          <br />
          <Row>
            <Col>
              <Vendor_Mini_Bio fullName={bio4.fullName} location={bio4.location} hours={bio4.hours} email={bio4.email} />
            </Col>
          </Row>
          <br />
          <Row>
            <Col>
              <Vendor_Mini_Bio />
            </Col>
          </Row>
        </Container>
        <Footer />
      </>
    );
  }
  else {
    return (
      <>
        <Navigation />
        <About_header />
        <br />
        <Container>
          <Row>
            <Col style={{textAlign: 'center'}}>
              <h2 className="title">
                {lastSection}
              </h2>
              <Subcategories_Search_Bar />
            </Col>
          </Row>
          <br />
          <Row>
            <Col>
              <Subcategories_Dropdown />
            </Col>
          </Row>
          <br />
          <Row>
            <Col>
              <h3>
                There are no vendors of this type in our database. Please try again later.
              </h3>
            </Col>
          </Row>
        </Container>
        <Footer />
      </>
    );
  }
}

export default Subcategories;
