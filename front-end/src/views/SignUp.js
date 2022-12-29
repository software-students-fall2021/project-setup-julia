import React, {useState} from 'react'

// reactstrap components
import {
  FormGroup,
  Label,
  Input,
  Container,
  Row,
  Col,
  Button
} from 'reactstrap'

import {useHistory} from 'react-router-dom';

import Footer from 'components/Footer.js'
import Navigation from 'components/Navigation.js'
import About_header from 'components/About_header.js'


function SignUp() {
    const history = useHistory()
    const [accountType, setAccountType] = useState("");

    const handleInput = async (event) => {
        if (event.target.value == "User")
        {
            setAccountType("User")
        }
        else if (event.target.value == "Vendor"){
            setAccountType("Vendor")
        }
      };

    const handleSignup = async(event) =>{
        switch (accountType){
            case "User":{
              history.push('/UserSignUp')
              break;
            }
            case "Vendor":{
              history.push('/VendorSignUp')
              break;
            }
        }
    }
    
  return (
    <>
      <Navigation />
      <About_header />
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <div classname='main'>
        <div classname='section text-center'>
          <Container>
            <Row>
              <Col style={{ textAlign: 'center' }}>
                <FormGroup>
                    <Label for="accountType">Select Account Type</Label>
                    <Input
                    type="select"
                    name="accountType"
                    id="accountType"
                    onInput={handleInput}
                    >
                    <option selected>Select an Account Type</option>
                    <option>User</option>
                    <option>Vendor</option>
                    </Input>
                    <br>
                    </br>
                    <Button color='primary' onClick={handleSignup}>
                        Sign Up
                    </Button>
                </FormGroup>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
      <br />
      <Footer />
    </>
  )
}

export default SignUp
