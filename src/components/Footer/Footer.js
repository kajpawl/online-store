import React from 'react';
import { NavLink } from 'react-router-dom';
import './Footer.scss';

const Footer = props => {
  return (
    <footer className="container">
      <div className="nav-links">
        <NavLink exact to="/" activeClassName="active">
          Home
        </NavLink>
        <NavLink to="/products" activeClassName="active">
          Products
        </NavLink>
        <NavLink exact to="/faq" activeClassName="active">
          FAQ
        </NavLink>
        <NavLink exact to="/terms" activeClassName="active">
          Terms
        </NavLink>
        <NavLink exact to="/contact" activeClassName="active">
          Contact
        </NavLink>
        <NavLink to="/cart" activeClassName="active">
          Cart
        </NavLink>
      </div>
      <a href="https://github.com/kajpawl">© Kajetan Pawliszyn 2019</a>
    </footer>
  )
};

export default Footer; 
