import FeatherIcon from 'feather-icons-react';
import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from '../search';
import {
  HeaderCard,
  HeaderContainer,
  HeaderRight,
  HeaderTitle
} from './styledComponents';
import {
  ABOUT,
  HOME,
  SIGN_IN,
  PRODUCT_LISTING,
  CART
} from '../../../router/types';
import { useSession } from '../../../hooks';
import { useSelector } from 'react-redux';
const Header = ({
  title = 'The BookTown',
  isSearchBarHide = false,
  onChangeSearch
}) => {
  const session = useSession();
  const { user } = session;
  const cartState = useSelector((state) => state.cart);
  const numberOfItemsInCart = Object.keys(
    cartState?.cartItems[user?.uid || ''] || {}
  ).length;

  const handleLogout = () => {
    session.logout(SIGN_IN);
  };
  return (
    <HeaderContainer className="header-group-1">
      <HeaderCard>
        <Link className="link" to={HOME}>
          <HeaderTitle>{title}</HeaderTitle>
        </Link>
      </HeaderCard>
      {!isSearchBarHide && (
        <HeaderCard className="header-group-1" width={'35%'}>
          <SearchBar onChangeSearch={onChangeSearch} />
        </HeaderCard>
      )}
      <HeaderRight>
        <span className="header-right-content">
          {user ? (
            `Hello, ${user?.displayName?.split(' ')[0]}`
          ) : (
            <Link to={SIGN_IN}>Login</Link>
          )}
        </span>
        <Link className="link" to={PRODUCT_LISTING}>
          <span className="header-right-content">Product</span>
        </Link>
        <Link className="link" to={ABOUT}>
          <span className="header-right-content">About</span>
        </Link>
        {user && (
          <span onClick={handleLogout} className="header-right-content">
            Logout
          </span>
        )}
        <Link className="link" to={CART}>
          <div className="cart-count">
            {' '}
            <span>{+numberOfItemsInCart ? numberOfItemsInCart : ''}</span>
            <FeatherIcon
              className="search-icon header-right-content"
              icon="shopping-cart"
              size="20"
            />
          </div>
        </Link>
      </HeaderRight>
    </HeaderContainer>
  );
};
Header.propTypes = {};
export default Header;
