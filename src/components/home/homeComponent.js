import React from 'react';
import { Footer } from '../common';
import Header from '../common/header';
import { HomeContainer, HomeBannerOverlapper } from './styledComponents';
import { Button } from '../common';
import { Link } from 'react-router-dom';
import { PRODUCT_LISTING, PRODUCT_SELL } from '../../router/types';
function HomeComponent(props) {
  return (
    <div>
      <Header isSearchBarHide={true} />
      <HomeContainer>
        <HomeBannerOverlapper>
          <div className="banner-overlapper-title">
            <span>The BookTown</span>
          </div>
          <p className="banner-overlapper-slogan">
            Read more, Gain more, Win more
          </p>
          <p className="banner-overlapper-text">
            Sell & Buy old and new books here
          </p>
          <div className="overlapper-btn-container">
            <Link to={PRODUCT_SELL}>
              <Button
                className="overlapper-btn overlapper-btn-sell"
                text="Sell Now"
              />
            </Link>
            <Link to={PRODUCT_LISTING}>
              <Button
                className="overlapper-btn overlapper-btn-buy"
                text="Buy Now"
              />
            </Link>
          </div>
        </HomeBannerOverlapper>
      </HomeContainer>
      <Footer />
    </div>
  );
}

HomeComponent.propTypes = {};

export default HomeComponent;
