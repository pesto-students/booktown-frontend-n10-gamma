import { Switch, Route } from 'react-router-dom';
import routes from './routes';
import ProtectiveRouter from './ProtectiveRouter';

const TheBookTownApplication = () => (
  <Switch>
    {routes.map((route) =>
      route.isProtectedRoute ? (
        <Route
          path={route.path}
          exact={route.exact}
          component={route.component}
        />
      ) : (
        <ProtectiveRouter
          path={route.path}
          component={route.component}
          route={route}
        />
      )
    )}
  </Switch>
);

export default TheBookTownApplication;
