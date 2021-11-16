import React, { useState } from 'react';
import items, { itemsFixPrice } from '../../DummyData/cartData';
import CartItems from './CartItems';
import CartTotal from './CartTotal';

function Cart() {
  const [cartItems, setCartItems] = useState(items);
  const [fixedPrice, setFixedPrice] = useState(itemsFixPrice);
  return (
    <>
      <CartItems
        items={cartItems}
        setCartItems={setCartItems}
        fixedPrice={fixedPrice}
      />
      <CartTotal items={cartItems} />
    </>
  );
}

export default Cart;
