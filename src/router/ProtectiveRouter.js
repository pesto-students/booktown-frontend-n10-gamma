import 'firebase/compat/auth';
import React, { useEffect, useState } from 'react';
import { Loader } from '../components/common';
import { Route, useHistory } from 'react-router-dom';
import useSession from '../hooks/useSession';

const ProtectiveRouter = (props) => {
  const session = useSession();
  const history = useHistory();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (!session.loading && session.user !== null) {
      setLoading(() => false);
    } else if (!session.loading && session.user === null) {
      setLoading(() => false);
      history.push('/signin');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [session]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <Route path={props.path} component={props.component} {...props} />
      )}
    </>
  );
};
ProtectiveRouter.propTypes = {};
export default ProtectiveRouter;
