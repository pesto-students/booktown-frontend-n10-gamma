import styled from 'styled-components';
import { CommonStyled } from '../common';
export const ProductDetialsContainer = styled(CommonStyled.Container)`
  width: auto;
  margin: 20px 0;
`;
export const ProductDetailsRow = styled(CommonStyled.Row)`
  width: 100%;
  justify-content: space-evenly;
  & {
    @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
      justify-content: center;
      align-items: center;
      flex-direction: column;
    }
  }
`;

export const ProductImagePreviewContainer = styled(CommonStyled.Container)`
  width: 400px;
  height: 600px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .row-image-preview {
    height: 500px;
    height: 80%;
    img {
      height: 100%;
      width: 100%;
    }
  }
  .row-img-list {
    height: 20%;
    display: flex;
    justify-content: space-evenly;
    width: 100%;
    overflow-x: auto;
    overflow-y: hidden;
    img {
      margin: 5px 5px;
      width: 100px;
      height: 100px;
      cursor: pointer;
    }

    &::-webkit-scrollbar {
      height: 5px;
    }
  }
  & {
    @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
      width: 90%;
    }
  }
`;

export const ProductDetailsInfoContainer = styled(CommonStyled.Container)`
  align-self: flex-start;
  justify-content: flex-start;
  width: 50%;
  box-sizing: border-box;
  padding: 0 10px;
  .product-details-info-title {
    margin: 10px 0;
    ${(props) => ({ ...props.theme.fonts.h4 })}
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
  .product-details-description-container {
    align-self: flex-start;
    margin: 10px 0;
    .product-details-description {
      display: -webkit-box;
      -webkit-line-clamp: 16;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
  }
  .product-details-info-price {
    margin: 10px 0;
    align-self: flex-start;
    .product-price {
      color: tomato;
      margin: 0 0 0 10px;
    }
  }
  .product-details-rating {
    display: flex;
    align-items: center;
    align-self: flex-start;
    .star-rating-detials {
      margin: 0 20px;
      color: ${(props) => props.theme.colors.primaryLight};
    }
  }
  & {
    @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
      align-self: center;
      flex-direction: column;
      width: 60%;
    }
    @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
      width: 90%;
    }
  }
`;

export const ProductDetailsCheckoutContainer = styled(CommonStyled.Container)`
  border: 1px solid ${(props) => props.theme.colors.primaryLight};
  border-radius: ${(props) => props.theme.size.xsm};
  padding: 10px;
  box-sizing: border-box;
  width: 15%;
  align-self: flex-start;
  justify-content: center;
  align-items: center;
  .product-checkout-price {
    color: tomato;
  }
  .product-checkout-qty-container {
    display: flex;
    margin: 10px 0;
    .product-checkout-qty {
      width: 70px;
      height: 30px;
      margin: 0 10px;
      background: none;
      border: 1px solid;
      border-radius: 0;
    }
  }
  .product-checkout-btn-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 80%;
    .product-checkout-buy-btn,
    .product-checkout-cart-btn {
      width: 100%;
      margin: 10px 0;
      border-radius: 50px;
    }
    .product-checkout-cart-btn {
      background: ${(props) => props.theme.colors.secondary};
      color: ${(props) => props.theme.colors.primaryLight};
    }
    .product-checkout-buy-btn {
      &:hover {
        background: ${(props) => props.theme.colors.primaryLight};
        color: ${(props) => props.theme.colors.secondary};
      }
    }
  }
  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    align-self: center;
    width: 30%;
    margin: 10px 0;
  }
  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    align-self: center;
    width: 90%;
    margin: 10px 0;
  }
`;

export const RecommendedProductsContainer = styled.div`
  margin-top: 100px;
  width: 100%;
  position: relative;
  .recommended-title {
    ${(props) => ({ ...props.theme.fonts.h4 })}
  }
  .recommended-carousel {
    display: flex;
    width: 100%;
    border: 1px solid ${(props) => props.theme.colors.primaryLight};
    padding: 10px;
    box-sizing: border-box;
    overflow-x: auto;
    overflow-y: hidden;
    flex-wrap: nowrap;
    scroll-behavior: smooth;
    scroll-snap-type: x mandatory;
    &::-webkit-scrollbar {
      height: 5px;
    }
  }

  .left-carousel-button,
  .right-carousel-button {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
    z-index: 1;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: ${(props) => props.theme.colors.primaryLight};
    border: 1px solid ${(props) => props.theme.colors.primaryLight};
    color: ${(props) => props.theme.colors.secondary};

    &:hover {
      background-color: ${(props) => props.theme.colors.primary};
      border: 1px solid ${(props) => props.theme.colors.primary};
      color: ${(props) => props.theme.colors.secondary};
    }
  }
  .left-carousel-button {
    left: 0;
  }
  .right-carousel-button {
    right: 0;
  }
`;
export const RecommendedProductWrapper = styled.div`
  margin: 0 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  scroll-snap-type: start;
  width: 250px;
  height: auto;
  img {
    height: 300px;
    width: 250px;
  }
  .recommended-product-title {
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
    font-size: 20px;
    font-weight: bold;
    color: #4b7696;
  }
  .recommended-product-price {
    font-weight: bold;
  }
`;

export const ProductInsightContainer = styled(CommonStyled.Container)`
  align-self: flex-start;
  align-items: flex-start;
  padding: 10px;
  margin: 10px 0;
  color: ${(props) => props.theme.colors.primaryLight};
  .product-insight-field {
    font-weight: bold;
  }
  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    align-self: center;
    width: 90%;
    align-items: center;
  }
`;
