import React from 'react';
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

const Component = (props) => {
  const { refs, handleCarouselAction } = useProductDetailsContainer();
  return (
    <>
      <Header />
      <ProductDetialsContainer>
        <ProductDetailsRow>
          <ProductImagePreviewContainer>
            <div className="row-image-preview">
              <img alt={'preview'} src={demoImg} />
            </div>
            <div className="row-img-list">
              <img alt={'preview'} src={demoImg} />
              <img alt={'preview'} src={demoImg} />
              <img alt={'preview'} src={demoImg} />
              <img alt={'preview'} src={demoImg} />
              <img alt={'preview'} src={demoImg} />
            </div>
          </ProductImagePreviewContainer>
          <ProductDetailsInfoContainer>
            <div className="product-details-info-title">
              {' '}
              In publishing and graphic design, Lorem ipsum is a placeholder
              text commonly used to demonstrate the visual form of a document or
              a typeface without relying on meaningful content. Lorem ipsum may
              be used as a placeholder before final copy is available.
            </div>
            <div className="product-details-info-price">
              <span>M.R.P</span>
              <span className="product-price">$100</span>
            </div>

            <div className="product-details-description-container">
              <h4>Product Description</h4>
              <p className="product-details-description">
                In publishing and graphic design, Lorem ipsum is a placeholder
                text commonly used to demonstrate the visual form of a document
                or a typeface without relying on meaningful content. Lorem ipsum
                may be used as a placeholder before final copy is available. In
                publishing and graphic design, Lorem ipsum is a placeholder text
                commonly used to demonstrate the visual form of a document or a
                typeface without relying on meaningful content. Lorem ipsum may
                be used as a placeholder before final copy is available. In
                publishing and graphic design, Lorem ipsum is a placeholder text
                commonly used to demonstrate the visual form of a document or a
                typeface without relying on meaningful content. Lorem ipsum may
                be used as a placeholder before final copy is available. In
                publishing and graphic design, Lorem ipsum is a placeholder text
                commonly used to demonstrate the visual form of a document or a
                typeface without relying on meaningful content. Lorem ipsum may
                be used as a placeholder before final copy is available. In
                publishing and graphic design, Lorem ipsum is a placeholder text
                commonly used to demonstrate the visual form of a document or a
                typeface without relying on meaningful content. Lorem ipsum may
                be used as a placeholder before final copy is available. In
                publishing and graphic design, Lorem ipsum is a placeholder text
                commonly used to demonstrate the visual form of a document or a
                typeface without relying on meaningful content. Lorem ipsum may
                be used as a placeholder before final copy is available.
              </p>
            </div>
            <div className="product-details-rating">
              <StarRatingComponent name={'Star Raiting'} starCount={5} />
              <span className="star-rating-detials">418 rating</span>
            </div>
          </ProductDetailsInfoContainer>
          <ProductDetailsCheckoutContainer>
            <div>
              <span className="product-checkout-price">M.R.P $100</span>
            </div>
            <div className="product-checkout-qty-container">
              <span>Quantity </span>
              <Input min={1} className="product-checkout-qty" type="number" />
            </div>
            <div className="product-checkout-btn-container">
              <Button className="product-checkout-buy-btn" text="Buy Now" />
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
            <span className="product-insight-field">Auth : </span>{' '}
            <span className="product-insight-value">Tejas</span>
          </div>
          <div>
            <span className="product-insight-field">Auth : </span>{' '}
            <span className="product-insight-value">Tejas</span>
          </div>
          <div>
            <span className="product-insight-field">Auth : </span>{' '}
            <span className="product-insight-value">Tejas</span>
          </div>
          <div>
            <span className="product-insight-field">Auth : </span>{' '}
            <span className="product-insight-value">Tejas</span>
          </div>
          <div>
            <span className="product-insight-field">Auth : </span>{' '}
            <span className="product-insight-value">Tejas</span>
          </div>
          <div>
            <span className="product-insight-field">Auth : </span>{' '}
            <span className="product-insight-value">Tejas</span>
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
