import { createSlice } from '@reduxjs/toolkit';
import { addItemToCart } from './cart.utils';
const namespace = 'cart';
const initialState = {
  count: 0,
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
    countIncrement: (state, action) => {
      state.count = action.payload;
    }
  }
});
// Action creators are generated for each case reducer function
export const { addItem, countIncrement } = cartSlice.actions;
export default cartSlice.reducer;
