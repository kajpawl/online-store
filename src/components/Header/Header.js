import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Header.scss';

class Header extends Component  {
  render () {
    const { searchProducts, cartItems, searchText, getCategory } = this.props;
    return (
      <header>
        <div className="fixedWrapper">
          <nav className="container">
            <NavLink exact to="/" className="shopLogoContainer" activeClassName="active">
              <img className="shopLogo" src={require("../../images/logo.png")} alt="BoardCraze logo" />
            </NavLink>
            <div className="nav-links">
              <NavLink exact to="/" activeClassName="active">
                Home
              </NavLink>
              <NavLink to="/products" activeClassName="active" onClick={() => getCategory('All')}>
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
                <div className="cartIconWrapper">
                  <FontAwesomeIcon icon="shopping-cart" className="cartIcon" />
                  {!cartItems || cartItems.length === 0 ? "" : 
                  <div className="itemsInCart">
                    {cartItems.length}
                  </div>}
                </div>
              </NavLink>
            </div>
            <div className="search">
              <div className={`searchWrapper ${searchText !== '' ? "extended" : ""}`}>
                <input type="text" 
                  onChange={(e) => searchProducts(e.target.value)}
                />
                <FontAwesomeIcon icon="search" className="searchIcon" />
              </div>
            </div>
          </nav>
        </div>
      </header>
    );
  };

};

export default Header;
