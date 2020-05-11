import React, { useState, useEffect }  from 'react';
import './App.css';
import { Button, Form, Spinner } from 'react-bootstrap';
import {useData} from './ApiDetail'
export default  function Symbol(prop) {
    const{ loading, datas, error } = useData('http://131.181.190.87:3000/stocks/{prop.symbol}');
    if(loading) {
        return <Button style={{backgroundColor: '#fff' , margin:'10px'}} variant="light" disabled>
        <Spinner
          as="span"
          animation="grow"
          size="sm"
          role="status"
          aria-hidden="true"
        />
        Loading...
      </Button>;}
    if (error) {return <p>Something went wrong: {error.message}</p>;}
    return (
  < >
     {datas}


  </>
    );
//{email:'example@api.com',password:'asdlkfj1'}



};

