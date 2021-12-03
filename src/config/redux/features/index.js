import { combineReducers } from 'redux';
import cartReducer from './cart/cartSlice';
import authReducer from './auth/authSlice';
export default combineReducers({
  cartReducer: cartReducer,
  auth: authReducer
});
