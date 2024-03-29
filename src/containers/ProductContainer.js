import React, { Component } from 'react';
import { connect } from 'react-redux';
import Product from '../components/Product/Product';
import NoMatch from '../components/NoMatch/NoMatch';
import { getProduct } from '../actions/products-actions';
import { addToCart } from '../actions/cart-actions';

class ProductContainer extends Component {
  
  componentDidMount() {
    const { getProduct, match } = this.props;
    getProduct(match.params.id);
  }

  render() {
    const { selectedProduct, addToCart, cartItems, match } = this.props;
    if (selectedProduct) {
      return (
        <Product 
          cartItems={cartItems} 
          product={selectedProduct} 
          matchId={match.params.id} 
          addToCart={(id) => addToCart(id)} 
        />
      );
    }
    else {
      return <NoMatch />
    }
  };
};

const mapStateToProps = store => ({
  selectedProduct: store.productsReducer.selectedProduct,
  cartItems: store.cartReducer.cartItems
});

const mapDispatchToProps = dispatch => ({
  getProduct: (id) => dispatch(getProduct(id)),
  addToCart: (id) => dispatch(addToCart(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductContainer);