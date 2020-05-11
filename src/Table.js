import React from 'react';
import './App.css';
import Table from 'react-bootstrap/Table'
import {useData} from './Api'
import { Button,Spinner } from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Symbol from './Symbol'
function Tabled(props) {
    return (
<>
<tr>
    <td>{props.name}</td>
    <td>{props.symbol}</td>
    <td>{props.industry}</td>
    <td>
    <Route path="/{props.symbol}">
    <Symbol symbol={props.symbol}/>
    </Route>
    <Link to="/{props.symbol}">{props.symbol}</Link>
      </td>
</tr>
</>
    )

};
function TableData() {
    const{ loading, datas, error } = useData();
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
        <>
            {datas.map((data) => (<Tabled name={data.name} symbol={data.symbol} industry={data.industry} />))}
        </>
    )
};
function ApiTable() {
  return (
< >
    <Table responsive="xl" >
  <thead>
    <tr>
      <th>Company Name</th>
      <th>Code</th>
      <th>Industry</th>
    </tr>

  </thead>
  <tbody>
  <Router>
  <Switch>


        <TableData />
  </Switch>
  </Router>
  </tbody>
</Table>
</>
  );
};

export default ApiTable;
