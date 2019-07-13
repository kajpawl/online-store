import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.scss';

const Header = props => {
  return (
    <div>
      <nav>
        <NavLink exact to="/" className="shopLogo" activeClassName="active">
          <img src="" alt="Music shop logo" />
        </NavLink>
        <div className="nav-links">
          <NavLink exact to="/home" activeClassName="active">
            Home
          </NavLink>
          <NavLink exact to="/user" activeClassName="active">
            User
          </NavLink>
          <NavLink to="/products" activeClassName="active">
            Products
          </NavLink>
          <NavLink to="/cart" activeClassName="active">
            Cart
          </NavLink>
        </div>
      </nav>
    </div>
  )
};

export default Header;
