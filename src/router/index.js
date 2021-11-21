import { Switch, Route } from 'react-router-dom';
import routes from './routes';
import ProtectiveRouter from './ProtectiveRouter';

const TheBookTownApplication = () => (
  <Switch>
    {routes.map((route) =>
      route.isProtectedRoute ? (
        <ProtectiveRouter
          path={route.path}
          component={route.component}
          route={route}
        />
      ) : (
        <Route
          path={route.path}
          exact={route.exact}
          component={route.component}
        />
      )
    )}
  </Switch>
);

export default TheBookTownApplication;
