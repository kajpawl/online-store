import React, { Component } from 'react';
import { connect } from 'react-redux';
import Home from '../components/Home/Home';
import { getProducts, sortProducts, searchProducts, getProduct, getCategory } from '../actions/products-actions';
import { addToCart } from '../actions/cart-actions';
import './ProductListContainer.scss';

class HomeContainer extends Component {
  componentDidMount() {
    const { getProducts, searchProducts } = this.props;
    getProducts();
    searchProducts('');
  }

  getProductsForPage() {
    const { shownProducts } = this.props;
    return shownProducts.filter(product => product.promoted === true);
  }

  render() {
    const { searchProducts, shownProducts, getProduct, addToCart, productsPerPage, currentPage, changeProductPage, cartItems, getCategory } = this.props;
    return (
      <Home 
        products={this.getProductsForPage()} 
        getProduct={(id) => getProduct(id)} 
        addToCart={(id) => addToCart(id)} 
        cartItems={cartItems}
        getCategory={(category) => getCategory(category)}
      />
    );
  }
};

const mapStateToProps = store => ({
  products: store.productsReducer.products,
  shownProducts: store.productsReducer.shownProducts,
  searchText: store.productsReducer.searchText,
  cartItems: store.cartReducer.cartItems
});

const mapDispatchToProps = dispatch => ({
  getProducts: () => dispatch(getProducts()),
  searchProducts: searchText => dispatch(searchProducts(searchText)),
  getProduct: id => dispatch(getProduct(id)),
  addToCart: id => dispatch(addToCart(id)),
  getCategory: category => dispatch(getCategory(category))
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);