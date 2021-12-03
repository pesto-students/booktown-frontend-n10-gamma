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
      // console.log('user loged in ', authState);
      setLoading(() => false);
    } else {
      firebase.auth().onAuthStateChanged((user) => {
        setLoading(() => false);
        if (user) {
          setUser(() => user._delegate);
          dispatch(login({ user: user._delegate }));
        } else {
          dispatch(logoutUser());
        }
      });
    }
  }, []);

  return {
    logout,
    loading,
    user: authState.user || user
  };
};

export default useSession;
