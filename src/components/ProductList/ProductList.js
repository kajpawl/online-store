import React from 'react';
import ProductListItem from '../ProductListItem/ProductListItem';
import './ProductList.scss';

const ProductList = props => {
  const { products, updateProducts, addToCart, cartItems } = props;
  return (
    <main className="productList">
      <div className="row fixRowPadding">
        {products.map((product, i) => {
          return (
            <ProductListItem 
              updateProducts={updateProducts} 
              key={i} product={product} 
              addToCart={addToCart} 
              cartItems={cartItems} 
            />
          )
        })}
      </div>
    </main>
  );
};

export default ProductList;