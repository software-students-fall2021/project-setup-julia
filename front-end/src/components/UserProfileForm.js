import React, { useEffect, useState } from "react";

import { FormGroup, Label, Input, FormText, Button } from "reactstrap";
import "./VendorProfileForm.css";
import axios from "axios";
import { useHistory } from "react-router-dom";
import Swal from 'sweetalert2'

const UserProfileForm = () => {
  const history = useHistory();
  const [profile, setProfile] = useState({
    username : "",
    fullname: "",
    password :"",
    email:""
  });
  const jwtToken = localStorage.getItem("token")
  const [authorized, setAuthorized] = useState(false)

  useEffect(() =>{
    axios.get('http://localhost:5000/user-profile', 
    {headers: {Authorization: `JWT ${jwtToken}`}},
    )
    .then(res =>{
      console.log(res)
      if (res.data.success){
        setProfile(res.data.user);
        setAuthorized(true)
      }
      else{
        console.log(res.data.message)
        setAuthorized(false)
      }
    })
    .catch(err =>{
      console.log(err)
    })
    
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault();

    //TO-DO: check currentPassword with database, make sure logged in
    if (e.target.newPassword1.value!=e.target.newPassword2.value){
      const error = new Error("New passwords do not match. Please try again.")
      alert(error)
      console.log(error)
      return error
    }
    else if (e.target.password.value != profile.password){
      const error = new Error("Incorrect current password.")
      alert(error)
      return error
    }
    const requestData = {
      id: profile.id,
      username: e.target.username.value,    //submitted value with name = "username"
      fullname: e.target.fullname.value,
      email: e.target.email.value,
      newPassword: e.target.newPassword1.value,
    };


    try {
      const response = await axios.post(
        "http://localhost:5000/user-profile-form",
        requestData
      );
      
      console.log(response.data.user)
      if (response.data.success){
        Swal.fire(
          'Nice!',
          "You have successfully updated your user information!",
          'success'
        )
      }
      else{
        Swal.fire("Oops!","We were unable to update your user information.", "You'll have to try again.")
      } 

      history.push("/UserProfile");
    } catch (err) {
      // throw an error
      console.log(err);
      throw new Error(err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormGroup>
        <Label for="fullname">Full Name</Label>
        <Input type="text" name="fullname" id="fullname" defaultValue = {profile.fullname} />
      </FormGroup>
      <FormGroup>
        <Label for="username">Username</Label>
        <Input type="text" name="username" id="username" defaultValue = {profile.username} />
      </FormGroup>
      <FormGroup>
        <Label for="email">Email</Label>
        <Input type="text" name="email" id="email" defaultValue = {profile.email} />
      </FormGroup>
      <FormGroup>
        <Label for="password">Current Password</Label>
        <Input type="password" name="password" id="password" autoComplete="off"/>
      </FormGroup>
      <br />
      <FormGroup>
        <Label for="newPassword1">New Password</Label>
        <Input type="text" name="newPassword1" id="newPassword1" />
      </FormGroup>
      <FormGroup>
        <Label for="newPassword2">Confirm New Password</Label>
        <Input type="text" name="newPassword2" id="newPassword2" />
      </FormGroup>
      <br />
      <Button color="primary" type="submit">
        Save Changes
      </Button>
    </form>
  );
};

export default UserProfileForm;
