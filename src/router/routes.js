import Cart from '../components/Cart';
import HomeComponent from '../components/home';
import ProductListingPage from '../components/ProductListingPage';
import { SignIn, SignUp } from '../components/auth';

const routes = [
  {
    path: '/',
    component: HomeComponent,
    exact: true,
    meta: { authorizedRoles: [] },
    name: 'home',
    key: 'home',
    isProtectedRoute: true
  },
  {
    path: '/products-listing',
    component: ProductListingPage,
    meta: { authorizedRoles: [] },
    name: 'product-listing',
    key: 'product',
    isProtectedRoute: true
  },
  {
    path: '/cart',
    component: Cart,
    meta: { authorizedRoles: [] },
    name: 'product-listing',
    key: 'cart',
    isProtectedRoute: true
  },
  {
    path: '/signin',
    component: SignIn,
    meta: { authorizedRoles: [] },
    name: 'signin',
    key: 'signin',
    isProtectedRoute: false
  },
  {
    path: '/signup',
    component: SignUp,
    meta: { authorizedRoles: [] },
    name: 'signup',
    key: 'signup',
    isProtectedRoute: false
  }
];

export default routes;
