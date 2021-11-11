import React from 'react';
import PropTypes from 'prop-types';
import { FooterContainer, FooterCards, FooterSocial } from './styledComponents';

function Footer(props) {
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
      </FooterCards>
      <FooterSocial>| Copywrite@2021</FooterSocial>
    </FooterContainer>
  );
}

Footer.propTypes = {};

export default Footer;
