import React, { useState, useEffect }  from 'react';
import './App.css';
import { Button, Form, Spinner } from 'react-bootstrap';
import jwt from 'jsonwebtoken'
import Msg from './Msg';

export default  function Register() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [msg, setMsg] = useState("");
    return (
  < >
  <Msg style={msg.style} info={msg.info}/>
  <Form>
    <Form.Group controlId="formBasicEmail">
      <Form.Label>Email address</Form.Label>
      <Form.Control value={email} onChange={event => {setEmail(event.target.value);}} type="email" placeholder="jh@qut.edu.au" required/>
      <Form.Text className="text-muted">
        We'll never share your email with anyone else.
      </Form.Text>
    </Form.Group>
  
    <Form.Group controlId="formBasicPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control  value={password}onChange={event => {setPassword(event.target.value);}}type="password" placeholder="something stronger than a hobbit character" required/>
    </Form.Group>
  
    <Button variant="primary" onClick={jwtLogin}>
      Submit
    </Button>
  </Form>
  </>
    );
//{email:'example@api.com',password:'asdlkfj1'}
function jwtLogin(){

  if (email == "" || password == ""){
    setMsg({style:"warning", info: 'need to fill all information'})}
  else{
    console.log(email,password)
  return fetch('http://131.181.190.87:3000/user/register', {
    method: "POST",
    body: JSON.stringify({email:email,password:password}),
    headers: {
      "accept": "application/json",
      "Content-type": "application/json"
    }
  })
.then((res) => res.json())
.then((res)=>res.error===true?setMsg({style:"warning", info: res.message}):localStorage.setItem("token",jwt.decode(res.token)),setMsg({style:"success", info: "Register success"}))}



};
}

