import Cart from '../components/Cart';
import HomeComponent from '../components/home/homeComponent';
import ProductListingPage from '../components/ProductListingPage/Index';

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
    component: <div> login </div>,
    meta: { authorizedRoles: [] },
    name: 'signin',
    key: 'signin',
    isProtectedRoute: false
  },
  {
    path: '/signup',
    component: <div> sign up </div>,
    meta: { authorizedRoles: [] },
    name: 'signup',
    key: 'signup',
    isProtectedRoute: false
  }
];

export default routes;
