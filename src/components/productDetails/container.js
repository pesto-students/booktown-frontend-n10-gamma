import { useLazyQuery } from '@apollo/react-hooks';
import { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProductById } from '../../graphql/queries/product';
import { useSession } from '../../hooks';

const useProductDetailsContainer = () => {
  const prams = useParams();
  const [getProductByIdQuery] = useLazyQuery(getProductById);
  const [productInfo, setProductInfo] = useState({});

  const session = useSession();
  useEffect(() => {
    getProductByIdQuery({
      variables: {
        id: prams.id
      }
    })
      .then((res) => {
        if (res.data.getProductById.status === 200) {
          setProductInfo(() => res.data.getProductById.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const carouselRef = useRef(null);
  const handleCarouselAction = (actionName, value) => {
    if (actionName === 'left') {
      carouselRef.current.scrollLeft -= value;
    } else if (actionName === 'right') {
      carouselRef.current.scrollLeft += value;
    }
  };
  const handleUserOrderHistory = (totalAmount) => {
    const productInfoClone = JSON.parse(JSON.stringify(productInfo));
    console.log(productInfoClone);
    delete productInfoClone['__typename'];
    productInfoClone.shippingAddress &&
      delete productInfoClone.shippingAddress['__typename'];
    const payload = {
      orderItems: [productInfoClone],
      orderAmount: totalAmount,
      orderDate: new Date().toLocaleDateString(),
      orderId: (
        Math.floor(Math.random() * (9999999999999999 - 10000000000)) +
        10000000000
      ).toString(),
      orderStatus: 'Success',
      orderTotal: 1,
      orderPaymentStatus: 'Success',
      orderPaymentMethod: 'Online'
    };
    session.service
      .handleAddUserOrderHistory(payload)
      .then(() => {})
      .catch(() => {});
  };
  return {
    refs: {
      carouselRef
    },
    handleCarouselAction,
    productInfo,
    handleUserOrderHistory
  };
};

export default useProductDetailsContainer;
