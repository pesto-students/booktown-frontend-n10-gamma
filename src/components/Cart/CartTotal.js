import React, { useState } from 'react';
import NumberFormat from 'react-number-format';
import AddressModal from './AddressModal';
import StripeCheckoutButton from './StripeCheckoutButton';
import { ItemTotal } from './styledComponents';

const CartTotal = ({ items }) => {
  const [show, setShow] = useState(false);

  const getTotalPrice = () => {
    let totalPrice = 0;
    items.map((item) => (totalPrice += item.price * item.quantity));
    return totalPrice;
  };

  const getTotalItems = () => {
    let totalTtems = 0;
    items.forEach((item) => {
      totalTtems += parseInt(item.quantity);
    });
    return totalTtems;
  };

  const onHide = () => {
    setShow(false);
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
        <StripeCheckoutButton price={getTotalItems()} />
      </ItemTotal>
    </>
  );
};

export default CartTotal;
