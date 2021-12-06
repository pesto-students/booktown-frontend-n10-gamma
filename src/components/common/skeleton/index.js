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

/**
 *
 * @param {{
 *  type: ('box' | 'line' | 'circle'),
 * }} param0
 * @returns
 */
export const GenreicSkeleton = ({
  type,
  width = 'auto',
  height = 'auto',
  containerClass = '',
  skeletonClass = '',
  ...rest
}) => {
  return (
    <GenreicSkeletonContainer
      className={containerClass}
      width={width}
      height={height}>
      <div className={`skeleton ${type} ${skeletonClass}`} {...rest}>
        <Shimmer />
      </div>
    </GenreicSkeletonContainer>
  );
};

const GenreicSkeletonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 10px 0;
  width: ${(props) => (props.width ? props.width : 'auto')};
  height: ${(props) => (props.height ? props.height : 'auto')};
  .skeleton.box {
    position: relative;
    width: 100%;
    height: 100%;
    background-color: #ddd;
    border-radius: ${(props) => props.theme.size.xsm};
  }
  .skeleton.circle {
    position: relative;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: #ddd;
  }
  .skeleton.line {
    position: relative;
    width: 100%;
    height: 10px;
    background-color: #ddd;
  }
`;
