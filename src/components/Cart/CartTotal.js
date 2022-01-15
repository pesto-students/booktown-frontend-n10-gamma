import React from 'react';
import NumberFormat from 'react-number-format';
import { useSelector } from 'react-redux';
import { useSession } from '../../hooks';
import AddressModal from './AddressModal';
import StripeCheckoutButton from './StripeCheckoutButton';
import { ItemTotal } from './styledComponents';

const CartTotal = () => {
  const cartState = useSelector((state) => state.cart);
  const session = useSession();
  const items = Object.values(cartState.cartItems[session.user?.uid] || {});

  const getTotalPrice = () => {
    let totalPrice = 0;

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

  const handleUserOrderHistory = (totalAmount) => {
    const cartItems = Object.values(cartState.cartItems[session.user.uid]);
    const payload = {
      orderItems: cartItems,
      orderAmount: totalAmount,
      orderDate: new Date().toLocaleDateString(),
      orderId: (
        Math.floor(Math.random() * (9999999999999999 - 10000000000)) +
        10000000000
      ).toString(),
      orderStatus: 'Success',
      orderTotal: cartItems.length,
      orderPaymentStatus: 'Success',
      orderPaymentMethod: 'Online'
    };
    session.service
      .handleAddUserOrderHistory(payload)
      .then(() => {})
      .catch(() => {});
  };

  return (
    <>
      <AddressModal />
      {items.length > 0 && (
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
            price={getTotalPrice()}
          />
        </ItemTotal>
      )}
    </>
  );
};

export default CartTotal;
