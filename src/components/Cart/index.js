import React, { useState } from 'react';
import items, { itemsFixPrice } from '../../DummyData/cartData';
import { Footer } from '../common';
import Header from '../common/header';
import CartItems from './CartItems';
import CartTotal from './CartTotal';
import { CartMain } from './styledComponents';
import { useSelector } from 'react-redux';


function Cart() {
  const cartState = useSelector((state) => state.cartReducer.cartItems);
  console.log(cartState);

  const [cartItems, setCartItems] = useState(cartState);
  const [fixedPrice, setFixedPrice] = useState(itemsFixPrice);
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
