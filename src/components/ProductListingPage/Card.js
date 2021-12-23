import React from 'react';
import styled from 'styled-components';
const ShoppingCard = ({
  item,
  title,
  price,
  originalPrice,
  description,
  onClick,
  onAddToCart,
  productPics = [],
  category,
  subCategory
}) => {
  return (
    <ShoppingCardContainer onClick={() => onClick(item)}>
      <CardImgContainer>
        <img src={productPics[0]} alt="img" />
        <div className="card-tag">{item.condition}</div>
      </CardImgContainer>
      <CardBody>
        <h6 className="card-body-title">{title}</h6>
        <Text lines={1}>{description || 'Product description'}</Text>
        <span className="price">
          <span style={{ fontWeight: 'bold' }}>${price || '$100'}</span>
          <span
            style={{
              textDecoration: 'line-through',
              fontSize: '13px',
              margin: '0 10px 0 5px'
            }}>
            ${originalPrice || '$10000'}
          </span>
          <span className="saving-amount">
            ({Number(100 - (price / originalPrice) * 100).toFixed()}% off)
          </span>
        </span>
        <div className="cart-body-footer">
          <span>
            <span>{category || 'category'} | </span>
            <span style={{ margin: '0 10px' }}>
              {subCategory || 'subcategory'}
            </span>
          </span>
          <button
            title="add to cart"
            onClick={(e) => onAddToCart(item, e)}
            className="overly-cart-btn">
            +
          </button>
        </div>
      </CardBody>
    </ShoppingCardContainer>
  );
};
export default ShoppingCard;

export const ShoppingCardContainer = styled.div`
  background: #fff;
  width: 300px;
  padding: 5px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin: 10px 20px;
  border-radius: ${(props) => props.theme.size.xsm};
  & {
    @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
      margin: 10px 0 !important;
      width: 250px;
    }
  }
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
  .card-tag {
    position: absolute;
    top: 0;
    left: 0;
    background-color: ${(props) => props.theme.colors.primary};
    padding: 5px 10px;
    border-radius: ${(props) => props.theme.size.xsm};
    font-weight: bold;
    color: #fff;
  }
`;
export const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  .card-body-title {
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
  .cart-body-footer {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .overly-cart-btn {
      border-radius: 50%;
      background: ${(props) => props.theme.colors.primary};
      font-weight: bold;
      border: none;
      color: white;
      font-size: 15px;
      width: 25px;
      height: 25px;
      text-align: center;
    }
  }
  .saving-amount {
    font-weight: bold;
  }
`;
export const Text = styled.span`
  display: -webkit-box;
  -webkit-line-clamp: ${(props) => props.lines || 1};
  -webkit-box-orient: vertical;
  overflow: hidden;
  font-weight: ${(props) => (props.bold ? 'bold' : 'normal')};
`;
