import React, { useState } from 'react';
import NumberFormat from 'react-number-format';
import { useSelector } from 'react-redux';
import { useSession } from '../../hooks';
import AddressModal from './AddressModal';
import StripeCheckoutButton from './StripeCheckoutButton';
import { ItemTotal } from './styledComponents';

const CartTotal = () => {
  const cartState = useSelector((state) => state.cart);
  const session = useSession();
  const [show, setShow] = useState(false);
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

  const onHide = () => {
    setShow(false);
  };

  const handleUserOrderHistory = (cartItems, totalAmount) => {
    const payload = {};
  };

  return (
    <>
      <AddressModal show={show} onHide={onHide} />
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
        <StripeCheckoutButton
          onCheckout={handleUserOrderHistory}
          price={getTotalItems()}
        />
      </ItemTotal>
    </>
  );
};

export default CartTotal;
