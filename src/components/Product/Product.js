import React from 'react';
import './Product.scss';

const Product = props => (
  <div>
    {props.product.name} <br />
    {props.product.price} zł <br />
    In stock: {props.product.stock} <br />
    {props.product.promoted === true ? `Old price: ${props.product.oldPrice} zł` : ""}
    <button onClick={() => props.addToCart(props.product.id)}>Add to cart</button>
  </div>
);

export default Product;