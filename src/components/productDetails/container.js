import { useRef } from 'react';

const useProductDetailsContainer = () => {
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
    handleCarouselAction
  };
};

export default useProductDetailsContainer;
