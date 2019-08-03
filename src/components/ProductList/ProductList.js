import React from 'react';
import ProductListItem from '../ProductListItem/ProductListItem';
import './ProductList.scss';

const ProductList = props => (
  <main className="productList">
    <div className="row fixRowPadding">
      {props.products.map((product, i) => {
        return (
          <ProductListItem updateProducts={props.updateProducts} key={i} product={product} addToCart={props.addToCart} cartItems={props.cartItems} />
        )
      })}
    </div>
  </main>
);

export default ProductList;