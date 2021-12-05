import React from 'react';
import styled from 'styled-components';
import Shimmer from './Shimmer';

const Skeleton = ({ type }) => {
  return (
    <SkeletonContainer>
      <div className={'img'}>
        <Shimmer />
      </div>
      <div className={'text'}>
        <Shimmer />
      </div>
      <div className={'text'}>
        <Shimmer />
      </div>
      <div className={'price'}>
        <Shimmer />
      </div>
      <div className={'text'}>
        <Shimmer />
      </div>
    </SkeletonContainer>
  );
};

Skeleton.propTypes = {};

const SkeletonContainer = styled.div`
  margin: 10px 0;
  width: 250px;
  padding: 5px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  border-radius: ${(props) => props.theme.size.xsm};
  .img {
    position: relative;
    width: 240px;
    height: 250px;
    align-self: center;
    background-color: #ddd;
  }
  .text {
    position: relative;
    background-color: #ddd;
    width: 100%;
    margin: 5px 0;
    height: 20px;
  }
  .price {
    position: relative;
    background-color: #ddd;
    width: 50%;
    margin: 5px 0;
    height: 20px;
  }
`;
export default Skeleton;
