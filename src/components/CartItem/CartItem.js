import React from 'react';
import { Link } from 'react-router-dom';
import './CartItem.scss';

const CartItem = props => (
  <div className="cartItem">
    <div className="cartItemContainer container">
      <div className="row">
        <div className="col-12 col-md-3">
          <div className="thumbnailCell cell">
            <Link className="miniature" to={"products/" + props.cartItem.item.id}>
              <div className="imgWrapper">
                <img src={require(`../../images/${props.cartItem.item.imgs}`)} alt={`${props.cartItem.item.name} cover`} />
              </div>
            </Link>
          </div>
        </div>
        <div className="col-12 col-md-3">
          <div className="titleCell cell">
            <Link to={"products/" + props.cartItem.item.id}>
              <h3>{props.cartItem.item.name}</h3>
            </Link>
          </div>
        </div>
        <div className="col-12 col-md-3">
          <div className="priceCell cell">
            <div className="pricesWrapper">
              <label className="jointPrice">$ {(props.cartItem.item.price * props.cartItem.quantity).toFixed(2)}</label>
              <label className="singlePrice">$ {props.cartItem.item.price} per item</label>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-3">
          <div className="quantityCell cell">
            <button className="backgroundBtn quantityButton" onClick={(id, quantity) => props.changeQuantity(props.cartItem.item.id, props.cartItem.quantity - 1)}>-</button>
            <input className="quantityInput" type="number" value={props.cartItem.quantity} onChange={e => props.changeQuantity(props.cartItem.item.id, e.target.value)} />
            <button className="backgroundBtn quantityButton" onClick={(id, quantity) => props.changeQuantity(props.cartItem.item.id, props.cartItem.quantity + 1)}>+</button>
          </div>
        </div>
        <div className="removeCell">
          <button onClick={(id) => props.removeFromCart(props.cartItem.item.id)}>&#10005;</button>
        </div>
      </div>
    </div>
  </div>
);

export default CartItem;