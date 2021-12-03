import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { countIncrement } from '../../config/redux/features/cart/cartSlice';
import CartItem from './CartItem';
import { Items } from './styledComponents';

const CartItems = ({ items, setCartItems, fixedPrice }) => {
  const dispatch = useDispatch();
  const cartState = useSelector((state) => state.cartReducer);

  const changeItemQuantity = (event, index) => {
    const newItems = [...items];
    newItems[index].quantity = event.target.value;
    newItems[index].price = fixedPrice[index] * newItems[index].quantity;
    setCartItems(newItems);
  };

  const deleteItem = (indexToDelete) => {
    const newItems = items.filter((item, index) => {
      return index !== indexToDelete;
    });
    setCartItems(newItems);
  };

  const handleClick = () => {
    dispatch(countIncrement(Math.random() * 1000));
  };

  return (
    <Items>
      <h1>Shopping Cart</h1>

      <hr />
      <div>
        {items.map((item, index) => (
          <CartItem
            key={uuidv4()}
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
