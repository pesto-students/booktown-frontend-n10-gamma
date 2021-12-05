import { Switch, Route } from 'react-router-dom';
import routes from './routes';
import ProtectiveRouter from './ProtectiveRouter';

const TheBookTownApplication = (props) => (
  <Switch>
    {routes.map((route) =>
      route.isProtectedRoute ? (
        <ProtectiveRouter key={route.key} {...route} />
      ) : (
        <Route
          path={route.path}
          exact={route.exact}
          component={route.component}
          key={route.key}
        />
      )
    )}
  </Switch>
);

export default TheBookTownApplication;
