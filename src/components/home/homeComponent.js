import React from 'react';
import { Footer } from '../common';
import Header from '../common/header';
import { HomeContainer, HomeBannerOverlapper } from './styledComponents';
import bookTownImg from '../../assets/book-img-1.png';
import { Button } from '../common';
import { Link } from 'react-router-dom';
import { PRODUCT_LISTING, SELL_NOW } from '../../router/types';
function HomeComponent(props) {
  return (
    <div>
      <Header />
      <HomeContainer>
        <img src={bookTownImg} alt="books" />
        <HomeBannerOverlapper>
          <div className="banner-overlapper-title">
            <span>BookTown</span>
          </div>
          <p className="banner-overlapper-slogan">
            Read more, Gain more, Win more
          </p>
          <p className="banner-overlapper-text">
            Sell & Buy old and new books here
          </p>
          <div className="overlapper-btn-container">
            <Link to={SELL_NOW}>
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
