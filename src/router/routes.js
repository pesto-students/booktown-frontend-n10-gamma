import HomeComponent from '../components/home/homeComponent';

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
    component: <div> product </div>,
    meta: { authorizedRoles: [] },
    name: 'product-listing',
    key: 'product',
    isProtectedRoute: true
  },
  {
    path: '/cart',
    component: <div> cart </div>,
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
