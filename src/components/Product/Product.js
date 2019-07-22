import React from 'react';
import './Product.scss';

const Product = props => (
  <div>
    <div>
      <img src={require(`../../images/${props.matchId}.jpg`)} alt={`${props.product.name} cover`} />
    </div>
    {props.product.name} <br />
    $ {props.product.price} <br />
    In stock: {props.product.stock} <br />
    {props.product.promoted === true ? `Old price: $ ${props.product.oldPrice}` : ""}
    <div className="productDescription">
      <h4><b>Description:</b></h4>
      <div dangerouslySetInnerHTML={{__html: props.product.description}} />
    </div>
    <button onClick={() => props.addToCart(props.product.id)}>Add to cart</button>
  </div>
);

export default Product;