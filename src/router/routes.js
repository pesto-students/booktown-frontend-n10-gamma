import Cart from '../components/Cart';
import HomeComponent from '../components/home';
import ProductListingPage from '../components/ProductListingPage';
import { SignIn, SignUp } from '../components/auth';
import {
  CART,
  HOME,
  PRODUCT_DETAILS,
  PRODUCT_LISTING,
  PRODUCT_SELL,
  SIGN_IN,
  SIGN_UP
} from './types';
import Error from '../components/common/Error';
import ProductSelling from '../components/productSelling';
import ProductDetails from '../components/productDetails';

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
    path: PRODUCT_SELL,
    component: ProductSelling,
    meta: { authorizedRoles: [] },
    name: 'product-sell',
    key: 'product-sell',
    isProtectedRoute: true
  },
  {
    path: PRODUCT_DETAILS,
    component: ProductDetails,
    meta: { authorizedRoles: [] },
    name: 'product-details',
    key: 'product-details',
    isProtectedRoute: true
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
