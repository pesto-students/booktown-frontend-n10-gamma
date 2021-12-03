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
import { ABOUT, HOME, SIGN_IN } from '../../../router/types';
import { useSession } from '../../../hooks';
const Header = ({ title = 'The BookTown' }) => {
  const session = useSession();
  const { isUserSuccessfulyLoggedIn, user } = session;
  const handleLogout = () => {
    session.logout(SIGN_IN);
  };
import { ABOUT, CART, HOME } from '../../../router/types';
import { useSelector } from 'react-redux';

const Header = ({ title = 'The BookTown', profileName = 'TP' }) => {
  const cartCount = useSelector((state) => state.cartReducer.cartItems.length);
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
        <Link className="link" to={CART}>
          <FeatherIcon
            className="search-icon header-right-content"
            icon="shopping-cart"
            size="20"
          />
          <span className="cart-count">{cartCount}</span>
        </Link>
        <HeaderProfile>
          <span className="header-right-content">
            {isUserSuccessfulyLoggedIn ? (
              `Hello ${user?.displayName}`
            ) : (
              <Link to={SIGN_IN}>Login</Link>
            )}
          </span>
        </HeaderProfile>
      </HeaderRight>
    </HeaderContainer>
  );
};

Header.propTypes = {};
export default Header;
