import React from 'react';
import { Link } from 'react-router-dom';
import './CartItem.scss';

const CartItem = props => (
  <div className="cartItem">
    <Link className="miniature" to={"products/" + props.cartItem.item.id}>
      <img src={require(`../../images/${props.cartItem.item.imgs}`)} alt={`${props.cartItem.item.name} cover`} />
      <h3>{props.cartItem.item.name}</h3>
    </Link>
    <label>$ {(props.cartItem.item.price * props.cartItem.quantity).toFixed(2)}</label>
    <label>$ {props.cartItem.item.price} per item</label>
    <button className="quantityButton" onClick={(id, quantity) => props.changeQuantity(props.cartItem.item.id, props.cartItem.quantity - 1)}>-</button>
    <input className="quantityInput" type="number" value={props.cartItem.quantity} onChange={e => props.changeQuantity(props.cartItem.item.id, e.target.value)} />
    <button className="quantityButton" onClick={(id, quantity) => props.changeQuantity(props.cartItem.item.id, props.cartItem.quantity + 1)}>+</button>
    <button onClick={(id) => props.removeFromCart(props.cartItem.item.id)}>Remove from cart</button>
  </div>
);

export default CartItem;