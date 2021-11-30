import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useHistory } from 'react-router-dom';

const useSession = () => {
  const history = useHistory();
  const [session, setSession] = useState({ user: null });
  const [sessionLoading, setSessionLoading] = useState(true);
  const [sessionError, setSessionError] = useState(null);
  const [isUserSuccessfulyLoggedIn, setIsUserSuccessfulyLoggedIn] =
    useState(false);
  /**
   *
   * @param {String} redirectUrl
   */
  const logout = (redirectUrl) => {
    setSessionLoading(() => true);
    firebase
      .auth()
      .signOut()
      .then(() => {
        setSession(() => ({ user: null }));
        setIsUserSuccessfulyLoggedIn(() => false);
        setSessionLoading(() => false);
        toast.success('Logged out successfully');
        setTimeout(() => {
          if (redirectUrl) history.push(redirectUrl);
        }, 2000);
      })
      .catch((error) => {
        toast.error(error.message);
        setSessionLoading(() => false);
        setSession(() => ({ user: null }));
        setIsUserSuccessfulyLoggedIn(() => false);
      });
  };
  useEffect(() => {
    getUserSession().catch((err) => {
      setSessionError(err.message);
      setSessionLoading(() => false);
      setSession(() => ({ user: null }));
      setIsUserSuccessfulyLoggedIn(() => false);
    });
  }, []);
  const getUserSession = async () => {
    setSessionLoading(() => true);
    const userDataPromise = new Promise((resolve, reject) => {
      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          setIsUserSuccessfulyLoggedIn(() => true);
          setSessionLoading(() => false);
          setSession(() => ({ user: user._delegate }));
          resolve(user._delegate);
        } else {
          reject(new Error('User not signed in'));
        }
      });
    });
    const userData = await userDataPromise;
    return userData;
  };
  return {
    ...session,
    sessionLoading,
    sessionError,
    isUserSuccessfulyLoggedIn,
    logout,
    getUserSession
  };
};

export default useSession;
