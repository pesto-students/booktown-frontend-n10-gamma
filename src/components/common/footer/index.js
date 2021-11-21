import React from 'react';
import PropTypes from 'prop-types';
import { FooterContainer, FooterCards, FooterSocial } from './styledComponents';
import FeatherIcon from 'feather-icons-react';

function Footer({ title = '' }) {
  return (
    <FooterContainer>
      <FooterCards>
        <span className="footer-card-title">Connect with us</span>
        <p className="footer-card-text">Facebook</p>
        <p className="footer-card-text">Instagram</p>
        <p className="footer-card-text">Twitter</p>
      </FooterCards>
      <FooterCards>
        <span className="footer-card-title">Let us help you</span>
        <p className="footer-card-text">Your account</p>
        <p className="footer-card-text">Your cart</p>
        <p className="footer-card-text">Your Orders</p>
      </FooterCards>
      <FooterCards>
        <span className="footer-card-title">Use our features</span>
        <p className="footer-card-text">Sell Books</p>
        <p className="footer-card-text">Buy old & new books</p>
        <p className="footer-card-text">Checkout cart</p>
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
