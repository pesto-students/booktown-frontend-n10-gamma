import React from 'react';
import PropTypes from 'prop-types';
import {
  HeaderContainer,
  HeaderTitle,
  HeaderCard,
  HeaderProfile,
  HeaderRight,
  HamburgerContainer
} from './styledComponents';
import { SearchBar } from '..';
import FeatherIcon from 'feather-icons-react';

const getHeaderRight = ({ profileName }) => (
  <HeaderRight>
    <span className="header-right-content">Home</span>
    <span className="header-right-content">About</span>
    <FeatherIcon
      className="search-icon header-right-content"
      icon="shopping-cart"
      size="20"
    />
    <HeaderProfile>
      <span className="header-right-content">{profileName}</span>
    </HeaderProfile>
  </HeaderRight>
);

function Header({ title = 'The BookTown', profileName = 'TP' }) {
  return (
    <HeaderContainer className="header-group-1">
      <HamburgerContainer>
        login
        {getHeaderRight({ profileName })}
      </HamburgerContainer>
      <HeaderCard>
        <HeaderTitle>{title}</HeaderTitle>
      </HeaderCard>
      <HeaderCard className="header-group-1" width={'35%'}>
        <SearchBar />
      </HeaderCard>
      {getHeaderRight({ profileName })}{' '}
    </HeaderContainer>
  );
}

Header.propTypes = {};
export default Header;
