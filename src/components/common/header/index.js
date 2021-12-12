import React from 'react';
import { useSelector } from 'react-redux';
import { useSession } from '../../../hooks';
import {
  ABOUT,
  CART,
  HOME,
  ORDER_HISTORY,
  PRODUCT_LISTING,
  SIGN_IN
} from '../../../router/types';
import FeatherIcon from 'feather-icons-react';
import { SearchBar } from '../.';
import {
  MenuContainer,
  MenuItem,
  CartMenu,
  HeaderLeftContainer,
  HeaderContainer,
  BrandName,
  SearchBarContainer
} from './styledComponents';
import { Link } from 'react-router-dom';

const Header = ({
  isSearchBarHide = false,
  onChangeSearch = () => {},
  searchResult = [],
  onSearchItemSelect = () => {},
  searchLoader = false
}) => {
  const session = useSession();
  const { user } = session;
  const cartState = useSelector((state) => state.cart);
  const [hamburgClicked, setHamburgClicked] = React.useState(false);
  const numberOfItemsInCart = Object.keys(
    cartState?.cartItems[user?.uid || ''] || {}
  ).length;
  const handleLogout = () => {
    session.logout(SIGN_IN);
  };
  return (
    <HeaderContainer>
      <HeaderLeftContainer>
        <Link to={HOME} className="link">
          <BrandName>
            The
            <FeatherIcon
              className="brand-name-icon"
              onClick={() => setHamburgClicked(true)}
              icon="book-open"
              size="30"
            />
          </BrandName>
          <BrandName>Booktown</BrandName>
        </Link>
        {!isSearchBarHide && (
          <SearchBarContainer>
            <SearchBar
              searchData={searchResult}
              onSearchItemSelect={onSearchItemSelect}
              onChange={onChangeSearch}
              searchLoader={searchLoader}
            />
          </SearchBarContainer>
        )}
      </HeaderLeftContainer>

      <div className="hamburg-menu">
        <FeatherIcon
          onClick={() => setHamburgClicked(true)}
          className=""
          icon="menu"
          size="30"
        />
      </div>
      <MenuContainer style={{ display: hamburgClicked && 'block' }}>
        <MenuItem className="close-icon">
          <FeatherIcon
            onClick={() => setHamburgClicked(false)}
            icon="x"
            size="30"
          />
        </MenuItem>
        <MenuItem>
          {user ? (
            `Hello, ${user?.displayName?.split(' ')[0]}`
          ) : (
            <Link className="link" to={SIGN_IN}>
              Login
            </Link>
          )}
        </MenuItem>
        <MenuItem>
          <Link className="link" to={PRODUCT_LISTING}>
            Product
          </Link>
        </MenuItem>
        <MenuItem>
          <Link className="link" to={ORDER_HISTORY}>
            Your Orders
          </Link>
        </MenuItem>
        <MenuItem>
          <Link className="link" to={ABOUT}>
            About
          </Link>
        </MenuItem>
        <MenuItem>
          <Link className="link" to={CART}>
            <CartMenu>
              {' '}
              <span>{+numberOfItemsInCart ? numberOfItemsInCart : ''}</span>
              <FeatherIcon
                className="search-icon header-right-content"
                icon="shopping-cart"
                size="25"
              />
            </CartMenu>
          </Link>
        </MenuItem>
        {user && (
          <MenuItem title={'Logout'} onClick={handleLogout}>
            <FeatherIcon
              onClick={() => setHamburgClicked(false)}
              icon="log-out"
              size="30"
            />
          </MenuItem>
        )}
      </MenuContainer>
    </HeaderContainer>
  );
};

Header.propTypes = {};
export default Header;
