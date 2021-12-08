import React from 'react';
import NumberFormat from 'react-number-format';
import { useSelector } from 'react-redux';
import { useSession } from '../../hooks';
import StripeCheckoutButton from './StripeCheckoutButton';
import { ItemTotal } from './styledComponents';

const CartTotal = () => {
  const cartState = useSelector((state) => state.cart);
  const cartItems = useSelector((state) => state.cart.cartItems);
  const session = useSession();
  const userSpecificItem = cartItems[session.user?.uid] || {};

  const getTotalPrice = () => {
    let totalPrice = 0;
    const items = Object.values(cartState.cartItems[session.user?.uid] || {});
    items?.map((item) => (totalPrice += item.price * item.quantity));
    return totalPrice;
  };

  const getTotalItems = () => {
    let totalTtems = 0;
    const items = Object.values(cartState.cartItems[session.user?.uid] || {});
    items.forEach((item) => {
      totalTtems += parseInt(item.quantity);
    });
    return totalTtems;
  };

  return (
    <>
      {Object.keys(userSpecificItem).length > 0 && (
        <ItemTotal>
          <h4>
            Subtotal({getTotalItems()} items):
            <span className="itemTotal-price">
              <NumberFormat
                value={getTotalPrice()}
                displayType={'text'}
                thousandSeparator={true}
                prefix={'$'}
                decimalScale={2}
              />
            </span>
          </h4>
          <StripeCheckoutButton price={getTotalPrice()} />
        </ItemTotal>
      )}
    </>
  );
};

export default CartTotal;
