import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import store from '../../store/index';
import ProductList from '../ProductList/ProductList';
import { Jumbotron } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Home.scss';

export default class Home extends Component {
  render() {
    const { products, searchProducts, sortProducts, getCategory, shownProducts, getProduct, addToCart, productsPerPage, currentPage, changeProductPage, cartItems } = this.props;
    return (
      <main className="home">
        <Jumbotron>
          <div className="jumbotronContent">
            <h1>Let it <span>roll</span></h1>
            <p>Find the best tabletop experience you can imagine. Period.</p>
            <Link to={"../products"} className="backToShopping">
              <button className="backgroundBtn">
                Shop now
              </button>
            </Link>
          </div>
        </Jumbotron>
        <div className="promotedItems container">
          <div className="row">
            <div className="col-12">
              <h2>Promoted items</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-12 productListWrapper">
              <ProductList 
                products={products} 
                getProduct={(id) => getProduct(id)} 
                addToCart={(id) => addToCart(id)} 
                cartItems={cartItems}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-12 buttonContainer">
              <Link to={"../products"} className="backToShopping">
                <button className="backgroundBtn" onClick={() => getCategory('All')}>
                  <FontAwesomeIcon icon="search" className="searchIcon" />
                  See all products
                </button>
              </Link>
            </div>
          </div>
        </div>
      </main>
    )
  }
}
