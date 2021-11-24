import Cart from '../components/Cart';
import HomeComponent from '../components/home';
import ProductListingPage from '../components/ProductListingPage';
import { SignIn, SignUp } from '../components/auth';
import { CART, HOME, PRODUCT_LISTING, SIGN_IN, SIGN_UP } from './types';
import Error from '../components/common/Error';

const routes = [
  {
    path: HOME,
    component: HomeComponent,
    exact: true,
    meta: { authorizedRoles: [] },
    name: 'home',
    key: 'home',
    isProtectedRoute: true
  },
  {
    path: PRODUCT_LISTING,
    component: ProductListingPage,
    meta: { authorizedRoles: [] },
    name: 'product-listing',
    key: 'product',
    isProtectedRoute: true
  },
  {
    path: CART,
    component: Cart,
    meta: { authorizedRoles: [] },
    name: 'cart',
    key: 'cart',
    isProtectedRoute: true
  },
  {
    path: SIGN_IN,
    component: SignIn,
    meta: { authorizedRoles: [] },
    name: 'signin',
    key: 'signin',
    isProtectedRoute: false
  },
  {
    path: SIGN_UP,
    component: SignUp,
    meta: { authorizedRoles: [] },
    name: 'signup',
    key: 'signup',
    isProtectedRoute: false
  },
  {
    component: Error,
    meta: { authorizedRoles: [] },
    name: 'error',
    key: 'error',
    isProtectedRoute: false
  }
];

export default routes;
