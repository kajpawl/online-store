import React from 'react';
import { Link } from 'react-router-dom';
import './CartItem.scss';

const CartItem = props => {
  const { cartItem, changeQuantity, removeFromCart } = props;
  return (
    <div className="cartItem">
      <div className="cartItemContainer container">
        <div className="row">
          <div className="col-6 col-md-3">
            <div className="thumbnailCell cell">
              <Link className="miniature" to={"products/" + cartItem.item.id}>
                <div className="imgWrapper">
                  <img src={require(`../../images/${cartItem.item.imgs}`)} alt={`${cartItem.item.name} cover`} />
                </div>
              </Link>
            </div>
          </div>
          <div className="col-6 col-md-3">
            <div className="titleCell cell">
              <Link to={"products/" + cartItem.item.id}>
                <h3>{cartItem.item.name}</h3>
              </Link>
            </div>
          </div>
          <div className="col-6 col-md-3">
            <div className="priceCell cell">
              <div className="pricesWrapper">
                <label className="jointPrice">$ {(cartItem.item.price * cartItem.quantity).toFixed(2)}</label>
                <label className="singlePrice">$ {cartItem.item.price} per item</label>
              </div>
            </div>
          </div>
          <div className="col-6 col-md-3">
            <div className="quantityCell cell">
              <button className="backgroundBtn quantityButton" onClick={(id, quantity) => changeQuantity(cartItem.item.id, cartItem.quantity - 1)}>-</button>
              <input className="quantityInput" type="number" value={cartItem.quantity} onChange={e => changeQuantity(cartItem.item.id, e.target.value)} />
              <button className="backgroundBtn quantityButton" onClick={(id, quantity) => changeQuantity(cartItem.item.id, cartItem.quantity + 1)}>+</button>
            </div>
          </div>
          <div className="removeCell">
            <button onClick={(id) => removeFromCart(cartItem.item.id)}>&#10005;</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;