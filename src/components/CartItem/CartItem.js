import React from 'react';
import { Link } from 'react-router-dom';
import './CartItem.scss';

const CartItem = props => (
  <div>
    <Link className="miniature" to={"products/" + props.cartItem.item.id}>
      <img alt="Cart Item" src="" />
      <h3>{props.cartItem.item.name}</h3>
    </Link>
    <label>{props.cartItem.item.price * props.cartItem.quantity} zł</label>
    <label>{props.cartItem.item.price} zł per item</label>
    <label>Quantity: {props.cartItem.quantity}</label>
    <button onClick={(id, quantity) => props.changeQuantity(props.cartItem.item.id, props.cartItem.quantity + 1)}>Add one more</button>
    <button onClick={(id) => props.removeFromCart(props.cartItem.item.id)}>Remove from cart</button>
  </div>
);

export default CartItem;