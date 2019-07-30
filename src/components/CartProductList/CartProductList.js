import React from 'react';
import CartItem from '../CartItem/CartItem';
import './CartProductList.scss';

const CartProductList = props => (
  <div className="row cartProductList">
    {props.cartItems.map(cartItem => {
      return (
        <CartItem 
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