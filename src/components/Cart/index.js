import React, { useState } from 'react';
import items, { itemsFixPrice } from '../../DummyData/cartData';
import { Footer } from '../common';
import Header from '../common/header';
import CartItems from './CartItems';
import CartTotal from './CartTotal';
import { CartMain } from './styledComponents';
import { useDispatch, useSelector } from 'react-redux';

function Cart() {
  const AllcartItems = useSelector((state) => state.cartReducer.cartItems);

  const [cartItems, setcartItems] = useState(AllcartItems);

  const itemsFixPrice = cartItems.map((item) => item.price);
  return (
    <>
      <Header />
      <CartMain>
        <CartItems
          items={cartItems}
          setCartItems={setcartItems}
          fixedPrice={itemsFixPrice}
        />
        <CartTotal items={cartItems} />
      </CartMain>
      <Footer />
    </>
  );
}

export default Cart;
