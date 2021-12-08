import React from 'react';
import { toast } from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import StripeCheckout from 'react-stripe-checkout';
import { deleteUserCart } from '../../config/redux/features/cart/cartSlice';
import { useSession } from '../../hooks';

const StripeCheckoutButton = ({ price, onCheckout = () => {} }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const session = useSession();

  const priceForStripe = price * 100;
  const publishableKey =
    'pk_test_51HgPkdItMNgOLBqdPoJCGKUdHfpXgpTJn2c8mSiY24VzX94k5EuzEhLYNjtGHrnFkqSgCpsfuKYfcqsmsly2DbtL00hmLhSQ7U';

  const onToken = (token) => {
    toast.success('Payment Succesful!');
    const uid = session.user?.uid;
    const payload = {
      uid
    };

    onCheckout(price);
    dispatch(deleteUserCart(payload));
    history.push('/product-listing');
  };

  return (
    <StripeCheckout
      style={{ backgroundColor: 'red' }}
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
