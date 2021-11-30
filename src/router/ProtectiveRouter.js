import 'firebase/compat/auth';
import React, { useEffect, useState } from 'react';
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
        <div>Loading...</div>
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
