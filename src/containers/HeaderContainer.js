import { connect } from 'react-redux';
import { searchProducts, getCategory } from '../actions/products-actions';
import Header from '../components/Header/Header';

const mapStateToProps = store => ({
  cartItems: store.cartReducer.cartItems,
  searchText: store.productsReducer.searchText
});

const mapDispatchToProps = dispatch => ({
  searchProducts: searchText => dispatch(searchProducts(searchText)),
  getCategory: category => dispatch(getCategory(category))
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);