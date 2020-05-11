import React from 'react';
import './App.css';
import { Alert } from 'react-bootstrap';



function Msg(props) {
    if (props.style === ""){
        return(< ></>)
    }else{
  return (
< >
<Alert variant={props.style}>
  <p className="mb-0">
  {props.info}
  </p>
</Alert></>
  );
}};

export default Msg;
