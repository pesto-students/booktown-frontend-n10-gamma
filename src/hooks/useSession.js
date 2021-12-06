import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import {
  login,
  logout as logoutUser
} from '../config/redux/features/auth/authSlice';

const useSession = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const authState = useSelector((state) => state.auth);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  /**
   *
   * @param {String} redirectUrl
   */
  const logout = (redirectUrl) => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        dispatch(logoutUser());
        toast.success('Logged out successfully');
        setTimeout(() => {
          if (redirectUrl) history.push(redirectUrl);
        }, 2000);
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };
  useEffect(() => {
    if (authState.isAuthenticated) {
      setLoading(() => false);
    } else {
      firebase.auth().onAuthStateChanged((user) => {
        setLoading(() => false);
        if (user) {
          user.getIdToken(true).then((token) => {
            setUser(() => user._delegate);
            setToken(() => token);
            window.localStorage.setItem('user-token', token);
            dispatch(login({ user: user._delegate, token }));
          });
        } else {
          window.localStorage.removeItem('user-token');
          dispatch(logoutUser());
        }
      });
    }
    return () => {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    logout,
    loading,
    user: authState.user || user,
    token: authState.token || token
  };
};

export default useSession;
