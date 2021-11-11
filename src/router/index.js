import { Switch, Route } from 'react-router-dom';
import routes from './routes';
import ProtectiveRouter from './ProtectiveRouter';

const TheBookTownApplication = () => (
  <Switch>
    {routes.map((route) =>
      route.isProtectedRoute ? (
        <Route path={route.path} exact={route.exact}>
          {route.component}
        </Route>
      ) : (
        <ProtectiveRouter
          path={route.path}
          component={route.component}
          {...route}
        />
      )
    )}
  </Switch>
);

export default TheBookTownApplication;
