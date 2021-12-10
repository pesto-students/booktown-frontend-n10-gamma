import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import {
  removeItem,
  updateQuantity
} from '../../config/redux/features/cart/cartSlice';
import { useSession } from '../../hooks';
import CartItem from './CartItem';
import { Items } from './styledComponents';

const CartItems = () => {
  const session = useSession();
  const cartItems = useSelector((state) => state.cart.cartItems);
  const userSpecificItem = cartItems[session.user?.uid] || {};
  const dispatch = useDispatch();
  const history = useHistory();

  const handleDeleteCartItem = (itemId, e) => {
    e.stopPropagation();
    const payload = {
      uid: session.user?.uid,
      itemId
    };
    dispatch(removeItem(payload));
  };

  const handleItemQtyChange = (itemId, qty) => {
    const payload = { itemId, qty: +qty, uid: session.user?.uid };

    dispatch(updateQuantity(payload));
  };

  const handleCartClick = (itemId, e) => {
    e.stopPropagation();
    history.push(`/product-details/${itemId}`);
  };

  return (
    <Items>
      <h3>Shopping Cart</h3>
      <hr />
      <div>
        {Object.keys(userSpecificItem)?.map((key, index) => (
          <CartItem
            itemId={key}
            item={userSpecificItem[key]}
            key={key}
            index={index}
            onItemQtyChange={handleItemQtyChange}
            onDeleteCartItem={handleDeleteCartItem}
            onCartItemClick={handleCartClick}
          />
        ))}
      </div>
    </Items>
  );
};

export default CartItems;
