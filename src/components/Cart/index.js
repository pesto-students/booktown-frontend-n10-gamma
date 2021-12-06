import React from 'react';
import { Footer } from '../common';
import Header from '../common/header';
import CartItems from './CartItems';
import CartTotal from './CartTotal';
import { CartMain } from './styledComponents';

function Cart() {
  return (
    <>
      <Header />
      <CartMain>
        <CartItems />
        <CartTotal />
      </CartMain>
      <Footer />
    </>
  );
}

export default Cart;
