import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { useHistory } from 'react-router';
import { toast } from 'react-hot-toast';

const StripeCheckoutButton = ({ price }) => {
  const history = useHistory();

  const priceForStripe = price * 100;
  const publishableKey =
    'pk_test_51HgPkdItMNgOLBqdPoJCGKUdHfpXgpTJn2c8mSiY24VzX94k5EuzEhLYNjtGHrnFkqSgCpsfuKYfcqsmsly2DbtL00hmLhSQ7U';

  const onToken = (token) => {
    console.log(token);
    toast.success('Payment Succesful!');
    history.push('/product-listing');
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="The Book Town"
      billingAddress
      shippingAddress
      image="https://image.shutterstock.com/image-vector/open-book-vector-clipart-silhouette-260nw-358417976.jpg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
