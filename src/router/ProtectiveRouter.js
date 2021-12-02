import 'firebase/compat/auth';
import React, { useEffect, useState } from 'react';
import Loader from 'react-loader-spinner';
import { Route, useHistory } from 'react-router-dom';
import useSession from '../hooks/useSession';

const ProtectiveRouter = (props) => {
  const session = useSession();
  const history = useHistory();
  const [isUserLogin, setUserLogin] = useState(false);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(() => true);
    session
      .getUserSession()
      .then((user) => {
        setLoading(() => false);
        console.log(user);
        if (user) {
          setUserLogin(true);
        } else {
          setUserLogin(false);
          history.push('/signin');
        }
      })
      .catch((err) => {
        setLoading(() => false);
        history.push('/signin');
      });
  }, []);
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
        isUserLogin && (
          <Route path={props.path} component={props.component} {...props} />
        )
      )}
    </>
  );
};
ProtectiveRouter.propTypes = {};
export default ProtectiveRouter;
