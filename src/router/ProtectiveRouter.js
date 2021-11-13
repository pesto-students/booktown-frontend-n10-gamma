import React from 'react';
import { Route } from 'react-router-dom';

const ProtectiveRouter = ({ path, component, ...rest }) => (
  // do protective routing checks here

  <Route path={path} {...rest}>
    {component}
  </Route>
);
ProtectiveRouter.propTypes = {};
export default ProtectiveRouter;
