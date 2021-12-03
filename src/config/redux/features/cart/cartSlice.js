import { createSlice } from '@reduxjs/toolkit';
import { addItemToCart, removeItemFromCart } from './cart.utils';
const namespace = 'cart';
const initialState = {
  hidden: true,
  cartItems: []
};
export const cartSlice = createSlice({
  name: namespace,
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.cartItems = addItemToCart(state.cartItems, action.payload);
    },
    removeItem: (state, action) => {
      state.cartItems = removeItemFromCart(state.cartItems, action.payload);
    }
  }
});
// Action creators are generated for each case reducer function
export const { addItem, removeItem } = cartSlice.actions;
export default cartSlice.reducer;
