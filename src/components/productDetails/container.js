import { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProductById } from '../../graphql/queries/product';
import { useLazyQuery } from '@apollo/react-hooks';

const useProductDetailsContainer = () => {
  const prams = useParams();
  const [getProductByIdQuery] = useLazyQuery(getProductById);
  const [productInfo, setProductInfo] = useState({});
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
  return {
    refs: {
      carouselRef
    },
    handleCarouselAction,
    productInfo
  };
};

export default useProductDetailsContainer;
