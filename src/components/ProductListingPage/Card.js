import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Button } from '../common';
import demoImg from './demoImg.png';
import { CART } from '../../router/types';

const ShoppingCard = ({
  item,
  title,
  price,
  originalPrice,
  description,
  onClick,
  onAddToCart,
  productPics = [demoImg, demoImg, demoImg, demoImg, demoImg],
  category,
  subCategory
}) => {
  // const productPics = [demoImg, demoImg, demoImg, demoImg, demoImg];
  const [currentPicIndex, setCurrentPicIndex] = React.useState(0);
  const [intervalId, setIntervalId] = React.useState(null);
  const changeCurrentPic = () => {
    const id = setInterval(() => {
      console.log(currentPicIndex);
      setCurrentPicIndex(() => (currentPicIndex + 1) % productPics.length);
    }, 1000);
    setIntervalId(() => id);
  };
  return (
    <ShoppingCardContainer>
      <CardImgContainer
        onMouseEnter={changeCurrentPic}
        onMouseLeave={() => clearInterval(intervalId)}>
        <img src={productPics[currentPicIndex]} alt="img" />
        <div className="img-overlay">
          <div>o o o o o </div>
          {/* <Link to={CART} style={{ width: '100%' }}> */}
          <Button
            onClick={() => onAddToCart(item)}
            className="overly-cart-btn"
            text={'Add to cart'}
          />
          {/* </Link> */}
        </div>
      </CardImgContainer>
      <CardBody>
        <h6 className="card-body-title">{title}</h6>
        <Text lines={1}>{description || 'Product description'}</Text>
        <span className="price">
          <span style={{ fontWeight: 'bold' }}>{price || 'Rs. 100'}</span>
          <span style={{ textDecoration: 'line-through', margin: '0 10px' }}>
            {originalPrice || 'Rs. 10000'}
          </span>
        </span>
        <span>
          <span>{category || 'category'}</span>
          <span style={{ margin: '0 10px' }}>
            {subCategory || 'subcategory'}
          </span>
        </span>
      </CardBody>
    </ShoppingCardContainer>
  );
};
export default ShoppingCard;

export const ShoppingCardContainer = styled.div`
  background: #fff;
  width: 250px;
  padding: 5px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin: 10px 0;
  border-radius: ${(props) => props.theme.size.xsm};
`;

export const CardImgContainer = styled.div`
  width: 240px;
  height: 300px;
  box-sizing: border-box;
  align-self: center;
  position: relative;
  cursor: pointer;
  img {
    height: 100%;
    width: 100%;
  }
  .img-overlay {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 0;
    background-color: #fff;
    display: none;
    flex-direction: column;
    justify-content: center;
    transition: all 1s ease;
    align-items: center;
    .overly-cart-btn {
      padding: 0;
      margin: 0;
      width: 100%;
      border-radius: 0;
    }
  }
  &:hover .img-overlay {
    display: flex;
    height: 50px;
  }
`;
export const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  .card-body-title {
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
`;
export const Text = styled.span`
  display: -webkit-box;
  -webkit-line-clamp: ${(props) => props.lines || 1};
  -webkit-box-orient: vertical;
  overflow: hidden;
  font-weight: ${(props) => (props.bold ? 'bold' : 'normal')};
`;
