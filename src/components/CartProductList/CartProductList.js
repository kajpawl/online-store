import React from 'react';
import CartItem from '../CartItem/CartItem';
import './CartProductList.scss';

const CartProductList = props => {
  const { cartItems, removeFromCart, changeQuantity } = props;
  return (
    <div className="row cartProductList">
      {cartItems.map(cartItem => {
        return (
          <CartItem 
            key={cartItem.item.id} 
            cartItem={cartItem} 
            removeFromCart={(id) => removeFromCart(id)} 
            changeQuantity={(id, quantity) => changeQuantity(id, quantity)} 
          />
        )
      })}
    </div>
  );
};

export default CartProductList;