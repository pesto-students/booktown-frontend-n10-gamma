import FeatherIcon from 'feather-icons-react';
import React from 'react';
import { Link } from 'react-router-dom';
import {
  CART,
  ORDER_HISTORY,
  PRODUCT_LISTING,
  PRODUCT_SELL
} from '../../../router/types';
import { FooterCards, FooterContainer, FooterSocial } from './styledComponents';
function Footer({ title = '' }) {
  return (
    <FooterContainer>
      <FooterCards>
        <p className="footer-card-title">Connect with us</p>
        <p className="footer-card-text">
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
            href={'https://www.facebook.com/'}>
            Facebook
          </a>
        </p>
        <p className="footer-card-text">
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
            href={'https://www.instagram.com/'}>
            Instagram
          </a>
        </p>
        <p className="footer-card-text">
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
            href={'https://twitter.com/'}>
            Twitter
          </a>
        </p>
      </FooterCards>
      <FooterCards>
        <p className="footer-card-title">Let us help you</p>
        <p className="footer-card-text">Your account</p>
        <p className="footer-card-text">
          <Link className="footer-link" to={CART}>
            Your cart
          </Link>
        </p>
        <Link className="footer-link" to={ORDER_HISTORY}>
          <p className="footer-card-text">Your Orders</p>
        </Link>
      </FooterCards>
      <FooterCards>
        <p className="footer-card-title">Use our features</p>
        <p className="footer-card-text">
          <Link className="footer-link" to={PRODUCT_SELL}>
            {' '}
            Sell Books
          </Link>
        </p>
        <p className="footer-card-text">
          <Link className="footer-link" to={PRODUCT_LISTING}>
            Buy old & new books
          </Link>
        </p>
        <p className="footer-card-text">
          <Link className="footer-link" to={CART}>
            {' '}
            Checkout cart{' '}
          </Link>
        </p>
      </FooterCards>
      <FooterCards height={'100px'} width={'100%'}>
        <FooterSocial>
          <FeatherIcon
            className="footer-social-icon"
            icon="facebook"
            size="20"
          />
          <FeatherIcon
            className="footer-social-icon"
            icon="instagram"
            size="20"
          />
          <FeatherIcon
            className="footer-social-icon"
            icon="twitter"
            size="20"
          />
          {` | `}
          <span className="footer-copywrite">Copywrite@2021</span>
        </FooterSocial>
      </FooterCards>
    </FooterContainer>
  );
}

Footer.propTypes = {};

export default Footer;
