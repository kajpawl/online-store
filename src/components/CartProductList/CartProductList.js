import React from 'react';
import CartItem from '../CartItem/CartItem';
import './CartProductList.scss';

const CartProductList = props => (
  <div className="cart-items-list">
    {props.cartItems.map(cartItem => {
      return (
        <CartItem 
          className="cart-list-item"
          key={cartItem.item.id} 
          cartItem={cartItem} 
          removeFromCart={(id) => props.removeFromCart(id)} 
          changeQuantity={(id, quantity) => props.changeQuantity(id, quantity)} 
        />
      )
    })}
  </div>
);

export default CartProductList;