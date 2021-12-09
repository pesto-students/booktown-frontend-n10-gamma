import FeatherIcon from 'feather-icons-react';
import React, { useState } from 'react';
import StarRatingComponent from 'react-star-rating-component';
import StripeCheckoutButton from '../Cart/StripeCheckoutButton';
import { Footer, Header, Input } from '../common';
import { GenreicSkeleton } from '../common/skeleton';
import useProductDetailsContainer from './container';
import demoImg from './demoImg.png';
import {
  ProductDetailsCheckoutContainer,
  ProductDetailsInfoContainer,
  ProductDetailsRow,
  ProductDetialsContainer,
  ProductImagePreviewContainer,
  ProductInsightContainer,
  RecommendedProductsContainer,
  RecommendedProductWrapper
} from './styledComponents';

const Component = (props) => {
  const { refs, handleCarouselAction, productInfo } =
    useProductDetailsContainer();
  const [currentPicIndex, setCurrentPicIndex] = useState(0);
  const [currentQty, setCurrentQty] = useState(1);
  const [prevImageLoad, setPrevImageLoad] = useState(false);
  return (
    <>
      <Header />
      <ProductDetialsContainer>
        <ProductDetailsRow>
          <ProductImagePreviewContainer>
            <div className="row-image-preview">
              {productInfo?.files && (
                <img
                  onLoad={() => {
                    setPrevImageLoad(true);
                  }}
                  alt={'preview'}
                  src={productInfo?.files[currentPicIndex]}
                />
              )}
              {!prevImageLoad && (
                <div className="skeleton-loader">
                  <GenreicSkeleton
                    type={'box'}
                    height={'450px'}
                    width={'100%'}
                  />
                  <GenreicSkeleton
                    type={'line'}
                    height={'10px'}
                    width={'100%'}
                  />
                </div>
              )}
            </div>
            <div className="row-img-list">
              {productInfo?.files?.map((file, index) => (
                <img
                  key={index}
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
              {productInfo?.title || (
                <GenreicSkeleton
                  type={'line'}
                  height={'10px'}
                  width={'200px'}
                />
              )}
            </div>
            <div className="product-details-info-price">
              {productInfo?.price ? (
                <>
                  <span>M.R.P</span>
                  <span className="product-price">$ {productInfo?.price}</span>
                </>
              ) : (
                <GenreicSkeleton
                  type={'line'}
                  height={'10px'}
                  width={'200px'}
                />
              )}
            </div>

            <div className="product-details-description-container">
              <h4>Product Description</h4>
              <div className="product-details-description">
                {productInfo?.description || (
                  <GenreicSkeleton
                    type={'line'}
                    height={'10px'}
                    width={'200px'}
                  />
                )}
              </div>
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
            </div>
          </ProductDetailsCheckoutContainer>
        </ProductDetailsRow>
        <ProductInsightContainer>
          <div>
            {productInfo?.author ? (
              <>
                <span className="product-insight-field">Author : </span>{' '}
                <span className="product-insight-value">
                  {productInfo?.author}
                </span>
              </>
            ) : (
              <GenreicSkeleton type={'line'} height={'10px'} width={'200px'} />
            )}
          </div>
          <div>
            {productInfo?.publisher ? (
              <>
                <span className="product-insight-field">Publisher : </span>{' '}
                <span className="product-insight-value">
                  {productInfo?.publisher}
                </span>
              </>
            ) : (
              <GenreicSkeleton type={'line'} height={'10px'} width={'200px'} />
            )}
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
