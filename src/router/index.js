import { Switch, Route } from 'react-router-dom';
import routes from './routes';
import ProtectiveRouter from './ProtectiveRouter';

const TheBookTownApplication = () => (
  <Switch>
    {routes.map((route) =>
      route.isProtectedRoute ? (
        <ProtectiveRouter {...route} />
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
