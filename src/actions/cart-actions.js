export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const CHANGE_QUANTITY = 'CHANGE_QUANTITY';
export const USE_COUPON = 'USE_COUPON';
export const TO_CHECKOUT = 'TO_CHECKOUT';
export const CONFIRM_ORDER = 'CONFIRM_ORDER';

// add product to cart
export function addToCart(id) {
  return {
    type: ADD_TO_CART,
    id
  }
}

// remove product from cart
export function removeFromCart(id) {
  return {
    type: REMOVE_FROM_CART,
    id
  }
}

//change quantity of product
export function changeQuantity(id, quantity) {
  return {
    type: CHANGE_QUANTITY,
    id,
    quantity
  }
}

// use discount coupon
export function useCoupon(couponCode) {
  return {
    type: USE_COUPON,
    couponCode
  }
}

// finalize order
export function toCheckout(subtotal) {
  return {
    type: TO_CHECKOUT,
    subtotal
  }
}