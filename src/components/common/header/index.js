import React from 'react';
import PropTypes from 'prop-types';
import {
  HeaderContainer,
  HeaderTitle,
  HeaderCard,
  HeaderProfile
} from './styledComponents';

import FeatherIcon from 'feather-icons-react';
import SearchBar from '../search';
function Header({ title = 'The BookTown', profileName = 'TP' }) {
  return (
    <HeaderContainer>
      <HeaderCard>
        <HeaderTitle>{title}</HeaderTitle>
      </HeaderCard>
      <HeaderCard width={'35%'}>
        <SearchBar />
      </HeaderCard>
      <HeaderCard>
        <span>Home</span>
      </HeaderCard>
      <HeaderCard>
        <span>About</span>
      </HeaderCard>
      <HeaderCard>
        <FeatherIcon className="search-icon" icon="cart" size="20" />
      </HeaderCard>
      <HeaderCard>
        <HeaderProfile>
          <span>{profileName}</span>
        </HeaderProfile>
      </HeaderCard>
    </HeaderContainer>
  );
}

Header.propTypes = {};
export default Header;