import 'firebase/compat/auth';
import React, { useEffect, useState } from 'react';
import Loader from 'react-loader-spinner';
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
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            width: '100vw',
            backgroundColor: '#263238'
          }}>
          <Loader
            type="Circles"
            color="#F5F5F6"
            height={100}
            width={100}
            timeout={100000}
          />
        </div>
      ) : (
        <Route path={props.path} component={props.component} {...props} />
      )}
    </>
  );
};
ProtectiveRouter.propTypes = {};
export default ProtectiveRouter;
