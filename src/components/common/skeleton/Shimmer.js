import React from 'react';
import styled, { keyframes } from 'styled-components';

const Shimmer = (props) => {
  return (
    <ShimmerWrapper>
      <div className={'shimmer'}></div>
    </ShimmerWrapper>
  );
};

Shimmer.propTypes = {};

const AnimateShimmer = keyframes`
    0% {
        /* background-position: -468px 0; */
        transform: translateX(0%);
       
    }
    100% {
        /* background-position: 468px 0; */
        transform: translateX(100%);
       
    }
`;
const ShimmerWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  .shimmer {
    height: 100%;
    width: 50%;
    background-color: rgba(255, 255, 255, 0.1);
    transform: skewX(0deg);
    animation: ${AnimateShimmer} 0.5s infinite;
  }
`;

export default Shimmer;
