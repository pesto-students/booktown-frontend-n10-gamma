import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { removeItem } from '../../config/redux/features/cart/cartSlice';

import CartItem from './CartItem';
import { Items } from './styledComponents';

const CartItems = ({ items, setCartItems, fixedPrice }) => {
  const dispatch = useDispatch();
  const cartState = useSelector((state) => state.cartReducer);

  const changeItemQuantity = (event, index) => {
    const newItems = [...items];
    console.log(newItems);
    newItems[index].quantity = event.target.value;
    newItems[index].price = fixedPrice[index] * newItems[index].quantity;
    setCartItems(newItems);
  };

  const deleteItem = (item, e) => {
    e.stopPropagation();
    dispatch(removeItem(item));
    // window.location.reload();
  };

  return (
    <Items>
      <h1>Shopping Cart</h1>

      <hr />
      <div>
        {items.map((item, index) => (
          <CartItem
            item={item}
            key={item.id}
            index={index}
            item={item}
            changeItemQuantity={changeItemQuantity}
            deleteItem={deleteItem}
          />
        ))}
      </div>
    </Items>
  );
};

export default CartItems;
