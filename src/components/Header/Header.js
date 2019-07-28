import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import './Header.scss';

class Header extends Component  {
  render () {
    const { searchProducts, cartItems } = this.props;
    return (
      <header>
        <nav className="container">
          <NavLink exact to="/" className="shopLogo" activeClassName="active">
            <img src="" alt="Board game shop logo" />
          </NavLink>
          <div className="search">
            <input type="text" placeholder="Search" onChange={(e) => searchProducts(e.target.value)} />
          </div>
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
              {!cartItems || cartItems.length === 0 ? "" : 
              <div className="itemsInCart">
                {cartItems.length}
              </div>}
            </NavLink>
          </div>
        </nav>
      </header>
    );
  };

};

export default Header;
