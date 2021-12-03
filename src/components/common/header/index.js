import FeatherIcon from 'feather-icons-react';
import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from '../search';
import {
  HeaderCard,
  HeaderContainer,
  HeaderProfile,
  HeaderRight,
  HeaderTitle
} from './styledComponents';
import { ABOUT, CART, HOME } from '../../../router/types';
import { useSelector } from 'react-redux';

const Header = ({ title = 'The BookTown', profileName = 'TP' }) => {
  return (
    <HeaderContainer className="header-group-1">
      <HeaderCard>
        <Link className="link" to={HOME}>
          <HeaderTitle>{title}</HeaderTitle>
        </Link>
      </HeaderCard>
      <HeaderCard className="header-group-1" width={'35%'}>
        <SearchBar />
      </HeaderCard>
      <HeaderRight>
        <Link className="link" to={HOME}>
          <span className="header-right-content">Home</span>
        </Link>
        <Link className="link" to={ABOUT}>
          <span className="header-right-content">About</span>
        </Link>
        <FeatherIcon
          className="search-icon header-right-content"
          icon="shopping-cart"
          size="20"
        />
        <HeaderProfile>
          <span className="header-right-content">{profileName}</span>
        </HeaderProfile>
      </HeaderRight>
    </HeaderContainer>
  );
};

Header.propTypes = {};
export default Header;
