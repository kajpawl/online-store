import { combineReducers } from 'redux';
import productsReducer from './products-reducer';
import cartReducer from './cart-reducer';

const reducers = combineReducers({
  productsReducer,
  cartReducer
});

export default reducers;