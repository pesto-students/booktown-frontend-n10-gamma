import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    'pk_test_51HgPkdItMNgOLBqdPoJCGKUdHfpXgpTJn2c8mSiY24VzX94k5EuzEhLYNjtGHrnFkqSgCpsfuKYfcqsmsly2DbtL00hmLhSQ7U';

  const onToken = (token) => {
    console.log(token);
    alert('Payment Succesful!');
  };

  return (
    <StripeCheckout
      style={{ backgroundColor: 'black !important', color: 'white' }}
      label="Pay Now"
      name="The Book Town"
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
