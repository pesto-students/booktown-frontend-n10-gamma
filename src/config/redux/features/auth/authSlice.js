import { createSlice } from '@reduxjs/toolkit';
const name = 'auth';
const initialState = {
  isAuthenticated: false,
  user: null,
  token: '',
  error: '',
  loading: false
};
const authSlice = createSlice({
  name,
  initialState,
  reducers: {
    login: (state, action) => {
      state.isAuthenticated = true;
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
      state.token = '';
    }
  }
});
export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
