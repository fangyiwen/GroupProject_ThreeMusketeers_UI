import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FaAlignRight } from 'react-icons/fa';
import logo from '../images/logo.svg';
import {AuthContext} from './Context/auth-context'
import './Navbar.css'

export default class Navbar extends Component {

  state = {
    isOpen: false
  };

  handleToggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };
  render() {
    return (
      <nav className="navbar">
        <div className="nav-center">
          <div className="nav-header">
            <Link to="/"><img src={logo} alt="Explore UNESCO Sites" /></Link>
            <button type="button" className="nav-btn" onClick={this.handleToggle}>
              <FaAlignRight className="nav-icon" />
            </button>
          </div>

          <ul className={this.state.isOpen ? "nav-links show-nav" : "nav-links"}>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/search">View Maps</Link></li>
            <li><Link to="/sites">View Sites</Link></li>
            <AuthContext.Consumer>
              {(context) => (
                context.isLoggedIn ? <li><Link to="/user">user</Link></li> :
                <li><Link to="/auth">login</Link></li>
              )}
            </AuthContext.Consumer>
            <AuthContext.Consumer>
              {(context) => (
                  context.isLoggedIn ? <li><button onClick={context.logout}>logout</button></li> :
                      <li></li>
              )}
            </AuthContext.Consumer>
          </ul>
        </div>
      </nav>
    );
  }
}