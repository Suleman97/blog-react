import React from 'react';
// import './App.css'
import Bootstrap from './botstrap'
import ErrorBound from './ErrorBound'
import Form from './Forms'
import Home from './Home'
import Listing from './Listing'
import Profile from './Profile'
import Users from './Users'
import Posts from './posts'
import pureComponentes from './pureComponentes'
import uncontrolledComponents from './uncontrolledComponents'
import controlledComponents from './controlledComponents'
import propTypes from './propTypes'
import { BrowserRouter, Link, Route } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap'
// import { NavLink } from 'react-router-dom';



class App extends React.Component {
  render() {
    return (
      
        <div className="App container">
          <BrowserRouter >
          <Navbar className="navbar navbar-expand-lg navbar-light bg-light">
            <Nav className="mr-auto">
              <Link className="navbar-brand" to="">Home</Link>
              <Link className="nav-item nav-link" to="/bootstrap"> Bootstrap</Link>
              <Link className="nav-item nav-link" to="/listing"> Listing</Link>
              <Link className="nav-item nav-link" to="/profile"> Profile</Link>
              <Link className="nav-item nav-link" to="/users">Users</Link>
              <Link className="nav-item nav-link" to="/errorbound"> ErrorBound</Link>
              <Link className="nav-item nav-link" to="/form"> Form</Link>
              <Link className="nav-item nav-link" to="/posts">Posts</Link>
              <Link className="nav-item nav-link" to="/purecomponents">Pure Componentes</Link>
              <Link className="nav-item nav-link" to="/uncontrolledcomponents">Uncontrolled Componentes</Link>
              <Link className="nav-item nav-link" to="/controlledcomponents">Controlled Componentes</Link>
              <Link className="nav-item nav-link" to="/propTypes">PropTypes</Link>
            </Nav>
          </Navbar>


          <Route exact path="/" component={Home} />
          <Route path="/bootstrap" component={Bootstrap} />
          <Route path="/listing" component={Listing} />
          <Route path="/profile" component={Profile} />
          <Route path="/users" component={Users} />
          <Route path="/errorbound" component={ErrorBound} />
          <Route path="/form" component={Form} />
          <Route path="/posts" component={Posts} />
          <Route path="/purecomponents" component={pureComponentes} />
          <Route path="/uncontrolledcomponents" component={uncontrolledComponents} />
          <Route path="/controlledcomponents" component={controlledComponents} />
          <Route path="/propTypes" component={propTypes } />


          </BrowserRouter>
         
        </div>
      
    );
  }
}



export default App;
