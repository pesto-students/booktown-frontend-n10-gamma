import React, { useState } from 'react';
import { Footer, Header, Input, Button } from '../common';
import useProductDetailsContainer from './container';
import {
  ProductDetailsRow,
  ProductDetialsContainer,
  ProductImagePreviewContainer,
  ProductDetailsInfoContainer,
  ProductDetailsCheckoutContainer,
  RecommendedProductsContainer,
  RecommendedProductWrapper,
  ProductInsightContainer
} from './styledComponents';
import demoImg from './demoImg.png';
import StarRatingComponent from 'react-star-rating-component';
import FeatherIcon from 'feather-icons-react';
import { Link } from 'react-router-dom';
import { CART } from '../../router/types';
import StripeCheckoutButton from '../Cart/StripeCheckoutButton';

const Component = (props) => {
  const { refs, handleCarouselAction, productInfo } =
    useProductDetailsContainer();
  const [currentPicIndex, setCurrentPicIndex] = useState(0);
  const [currentQty, setCurrentQty] = useState(1);
  return (
    <>
      <Header />
      <ProductDetialsContainer>
        <ProductDetailsRow>
          <ProductImagePreviewContainer>
            <div className="row-image-preview">
              {productInfo?.files && (
                <img
                  alt={'preview'}
                  src={productInfo?.files[currentPicIndex]}
                />
              )}
            </div>
            <div className="row-img-list">
              {productInfo?.files?.map((file, index) => (
                <img
                  alt={'preview'}
                  src={file}
                  onClick={() => setCurrentPicIndex(index)}
                />
              ))}
            </div>
          </ProductImagePreviewContainer>
          <ProductDetailsInfoContainer>
            <div className="product-details-info-title">
              {' '}
              {productInfo?.title || 'Title'}
            </div>
            <div className="product-details-info-price">
              <span>M.R.P</span>
              <span className="product-price">$ {productInfo?.price}</span>
            </div>

            <div className="product-details-description-container">
              <h4>Product Description</h4>
              <p className="product-details-description">
                {productInfo?.description || 'Description'}
              </p>
            </div>
            <div className="product-details-rating">
              <StarRatingComponent name={'Star Raiting'} starCount={5} />
              <span className="star-rating-detials">418 rating</span>
            </div>
          </ProductDetailsInfoContainer>
          <ProductDetailsCheckoutContainer>
            <div>
              <span className="product-checkout-price">
                M.R.P $ {productInfo?.price * currentQty}
              </span>
            </div>
            <div className="product-checkout-qty-container">
              <span>Quantity </span>
              <Input
                min={1}
                onChange={(e) => {
                  setCurrentQty(e.target.value);
                }}
                value={currentQty + ''}
                className="product-checkout-qty"
                type="number"
              />
            </div>
            <div className="product-checkout-btn-container">
              {/* <Button className="product-checkout-buy-btn" text="Buy Now" /> */}
              <StripeCheckoutButton price={productInfo?.price * currentQty} />
              <Link style={{ width: '100%' }} to={CART}>
                <Button
                  className="product-checkout-cart-btn"
                  text="Add To Cart"
                />
              </Link>
            </div>
          </ProductDetailsCheckoutContainer>
        </ProductDetailsRow>
        <ProductInsightContainer>
          <div>
            <span className="product-insight-field">Author : </span>{' '}
            <span className="product-insight-value">{productInfo?.author}</span>
          </div>
          <div>
            <span className="product-insight-field">Publisher : </span>{' '}
            <span className="product-insight-value">
              {productInfo?.publisher}
            </span>
          </div>
          <div>
            <span className="product-insight-field">Language : </span>{' '}
            <span className="product-insight-value">
              {productInfo?.language}
            </span>
          </div>
          <div>
            <span className="product-insight-field">Page : </span>{' '}
            <span className="product-insight-value">
              {productInfo?.pages || Math.floor(Math.random() * 2000)}
            </span>
          </div>
          <div>
            <span className="product-insight-field">Category : </span>{' '}
            <span className="product-insight-value">
              {productInfo?.category}
            </span>
          </div>
          <div>
            <span className="product-insight-field">Subcategory : </span>{' '}
            <span className="product-insight-value">
              {productInfo?.subcategory}
            </span>
          </div>
        </ProductInsightContainer>
        <RecommendedProductsContainer>
          <div className="recommended-title">Recommended for you</div>
          <FeatherIcon
            onClick={() => handleCarouselAction('left', 270)}
            className="left-carousel-button"
            icon="chevron-left"
          />
          <div ref={refs.carouselRef} className="recommended-carousel">
            <RecommendedProductWrapper>
              <img alt={'preview'} src={demoImg} />
              <span className="recommended-product-title">
                In publishing and graphic design, Lorem ipsum is a placeholder
              </span>
              <span>
                <StarRatingComponent name={'Star'} value={4} starCount={5} />
              </span>
              <span className="recommended-product-price">$ 100</span>
            </RecommendedProductWrapper>
            <RecommendedProductWrapper>
              <img alt={'preview'} src={demoImg} />
              <span className="recommended-product-title">
                In publishing and graphic design, Lorem ipsum is a placeholder
              </span>
              <span>
                <StarRatingComponent name={'Star'} value={4} starCount={5} />
              </span>
              <span className="recommended-product-price">$ 100</span>
            </RecommendedProductWrapper>
            <RecommendedProductWrapper>
              <img alt={'preview'} src={demoImg} />
              <span className="recommended-product-title">
                In publishing and graphic design, Lorem ipsum is a placeholder
              </span>
              <span>
                <StarRatingComponent name={'Star'} value={4} starCount={5} />
              </span>
              <span className="recommended-product-price">$ 100</span>
            </RecommendedProductWrapper>
            <RecommendedProductWrapper>
              <img alt={'preview'} src={demoImg} />
              <span className="recommended-product-title">
                In publishing and graphic design, Lorem ipsum is a placeholder
              </span>
              <span>
                <StarRatingComponent name={'Star'} value={4} starCount={5} />
              </span>
              <span className="recommended-product-price">$ 100</span>
            </RecommendedProductWrapper>
            <RecommendedProductWrapper>
              <img alt={'preview'} src={demoImg} />
              <span className="recommended-product-title">
                In publishing and graphic design, Lorem ipsum is a placeholder
              </span>
              <span>
                <StarRatingComponent name={'Star'} value={4} starCount={5} />
              </span>
              <span className="recommended-product-price">$ 100</span>
            </RecommendedProductWrapper>
            <RecommendedProductWrapper>
              <img alt={'preview'} src={demoImg} />
              <span className="recommended-product-title">
                In publishing and graphic design, Lorem ipsum is a placeholder
              </span>
              <span>
                <StarRatingComponent name={'Star'} value={4} starCount={5} />
              </span>
              <span className="recommended-product-price">$ 100</span>
            </RecommendedProductWrapper>
            <RecommendedProductWrapper>
              <img alt={'preview'} src={demoImg} />
              <span className="recommended-product-title">
                In publishing and graphic design, Lorem ipsum is a placeholder
              </span>
              <span>
                <StarRatingComponent name={'Star'} value={4} starCount={5} />
              </span>
              <span className="recommended-product-price">$ 100</span>
            </RecommendedProductWrapper>
            <RecommendedProductWrapper>
              <img alt={'preview'} src={demoImg} />
              <span className="recommended-product-title">
                In publishing and graphic design, Lorem ipsum is a placeholder
              </span>
              <span>
                <StarRatingComponent name={'Star'} value={4} starCount={5} />
              </span>
              <span className="recommended-product-price">$ 100</span>
            </RecommendedProductWrapper>
            <RecommendedProductWrapper>
              <img alt={'preview'} src={demoImg} />
              <span className="recommended-product-title">
                In publishing and graphic design, Lorem ipsum is a placeholder
              </span>
              <span>
                <StarRatingComponent name={'Star'} value={4} starCount={5} />
              </span>
              <span className="recommended-product-price">$ 100</span>
            </RecommendedProductWrapper>
            <RecommendedProductWrapper>
              <img alt={'preview'} src={demoImg} />
              <span className="recommended-product-title">
                In publishing and graphic design, Lorem ipsum is a placeholder
              </span>
              <span>
                <StarRatingComponent name={'Star'} value={4} starCount={5} />
              </span>
              <span className="recommended-product-price">$ 100</span>
            </RecommendedProductWrapper>
            <RecommendedProductWrapper>
              <img alt={'preview'} src={demoImg} />
              <span className="recommended-product-title">
                In publishing and graphic design, Lorem ipsum is a placeholder
              </span>
              <span>
                <StarRatingComponent name={'Star'} value={4} starCount={5} />
              </span>
              <span className="recommended-product-price">$ 100</span>
            </RecommendedProductWrapper>
            <RecommendedProductWrapper>
              <img alt={'preview'} src={demoImg} />
              <span className="recommended-product-title">
                In publishing and graphic design, Lorem ipsum is a placeholder
              </span>
              <span>
                <StarRatingComponent name={'Star'} value={4} starCount={5} />
              </span>
              <span className="recommended-product-price">$ 100</span>
            </RecommendedProductWrapper>
            <RecommendedProductWrapper>
              <img alt={'preview'} src={demoImg} />
              <span className="recommended-product-title">
                In publishing and graphic design, Lorem ipsum is a placeholder
              </span>
              <span>
                <StarRatingComponent name={'Star'} value={4} starCount={5} />
              </span>
              <span className="recommended-product-price">$ 100</span>
            </RecommendedProductWrapper>
          </div>
          <FeatherIcon
            onClick={() => handleCarouselAction('right', 270)}
            className="right-carousel-button"
            icon="chevron-right"
          />
        </RecommendedProductsContainer>
      </ProductDetialsContainer>
      <Footer />
    </>
  );
};

Component.propTypes = {};

export default Component;
