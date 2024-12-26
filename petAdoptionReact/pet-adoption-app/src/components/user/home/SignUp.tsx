import React, { useState } from 'react'
import "./userHome.css"

import Navbar from '../../navbar/Navbar';
import { Button, Container, Form, FormControl, FormGroup, FormLabel } from 'react-bootstrap';
import UserService from '../service/UserService';
import UserFooter from './UserFooter';
import { User } from '../../../interfaces/User';
import { RegisterUser } from '../../../interfaces/RegisterUser';



function SignUp() {
  
  let userService = new UserService();

  const [register, setRegister] = useState<RegisterUser>({
    username : "",
    email : "",
    firstname : "",
    lastname : "",
    password : ""
  })

   function reigsterNewUser (e : any){
    e.preventDefault();
    userService.registerUsers(register).then(response => {
      alert("Registration was successful")
      console.log(response.status)
  }).catch(error => {
      alert("Registration failed : please fill all fields  :  " + error)  
      console.log(error)
  })
    
  }

  function registrationHanlder(e : any){
    setRegister({
      ...register,
      [e.target.name] : e.target.value
    })
  }

  return (
    <div className='root'>
      <Container>
        <Navbar/>
        <h1 className='titles'>Let's Sign up Now! </h1>

          <Form onSubmit = {reigsterNewUser}>
            <FormGroup>
              <FormLabel>Username </FormLabel>
              <FormControl 
                  type="text" 
                  placeholder="Username"
                  name = "username"
                  value = {register.username}
                  onChange = {registrationHanlder}
                  required
                  />
            </FormGroup>
            <FormGroup>
              <FormLabel>Email </FormLabel>
              <FormControl 
                  type="text" 
                  placeholder="Email"
                  name = "email"
                  value = {register.email}
                  onChange = {registrationHanlder}
                  required
                  />      
              </FormGroup>
              <FormGroup>
              <FormLabel>Firstname </FormLabel>
              <FormControl 
                  type="text" 
                  placeholder="First name"
                  name = "firstname"
                  value = {register.firstname}
                  onChange = {registrationHanlder}
                  required
                  />
            </FormGroup>
              <FormGroup>
              <FormLabel>Lastname </FormLabel>
              <FormControl 
                  type="text" 
                  placeholder="last name"
                  name = "lastname"
                  value = {register.lastname}
                  onChange = {registrationHanlder}
                  required
                  />
            </FormGroup>
              <FormGroup>
              <FormLabel> Password :  </FormLabel>
              <FormControl 
                  type="password" 
                  placeholder="Password"
                  name = "password"
                  value = {register.password}
                  onChange = {registrationHanlder}
                  required
                  />      
              </FormGroup> 
            <Button 
              type="submit"
            > 
            Submit
            </Button>
          </Form>
        </Container>
        <UserFooter/>
    </div>

  )
}

export default SignUp