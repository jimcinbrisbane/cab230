import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import './Table'
import ApiTable from './Table';
import Login from './Login'
import Register from './Register'

function App() {

  return (
    <Router>
    <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </nav>



    <div className="App">
    </div>

    <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/">
          <ApiTable />
          </Route>

          
        </Switch>
      </div>
    </Router>

  );
}

function Users() {
  return <h2>Users</h2>;
}
export default App;
