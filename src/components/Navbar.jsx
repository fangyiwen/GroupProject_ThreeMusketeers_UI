import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FaAlignRight } from 'react-icons/fa';
import logo from '../images/logo.svg';


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
            <li><Link to="/search">Heritage Site Map</Link></li>
            <li><Link to="/sites">View Select Sites</Link></li>
            <li><Link to="/auth">log in</Link></li>
          </ul>
        </div>
      </nav>
    );
  }
}