import React, { useState } from 'react';
import items, { itemsFixPrice } from '../../DummyData/cartData';
import { Footer } from '../common';
import Header from '../common/header';
import CartItems from './CartItems';
import CartTotal from './CartTotal';
import { CartMain } from './styledComponents';

function Cart() {
  const [cartItems, setCartItems] = useState(items);
  const [fixedPrice] = useState(itemsFixPrice);
  return (
    <>
      <Header />
      <CartMain>
        <CartItems
          items={cartItems}
          setCartItems={setCartItems}
          fixedPrice={fixedPrice}
        />
        <CartTotal items={cartItems} />
      </CartMain>
      <Footer />
    </>
  );
}

export default Cart;
