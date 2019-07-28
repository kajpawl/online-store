import React, { Component } from 'react';
import { connect } from 'react-redux';
import { searchProducts } from '../actions/products-actions';
import Header from '../components/Header/Header'

const mapStateToProps = store => ({
	cartItems: store.cartReducer.cartItems,
	searchText: store.productsReducer.searchText
});

const mapDispatchToProps = dispatch => ({
	searchProducts: searchText => dispatch(searchProducts(searchText))
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);