import React from 'react';
import { Route } from 'react-router-dom';

const ProtectiveRouter = (props) => (
  // do protective routing checks here
  <Route path={props.path} component={props.component} {...props} />
);
ProtectiveRouter.propTypes = {};
export default ProtectiveRouter;
