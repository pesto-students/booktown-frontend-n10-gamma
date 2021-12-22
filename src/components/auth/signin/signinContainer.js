import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { useEffect, useState } from 'react';
import {
  googleAuthProvider,
  facebookAuthProvider
} from '../../../config/firebase/authProviders';
import useErrorContext from '../../../hooks/useErrorContext';
import { useHistory } from 'react-router-dom';
import { HOME } from '../../../router/types';
import toast from 'react-hot-toast';
import { useSession } from '../../../hooks';
const useSigninContainer = (props) => {
  const history = useHistory();
  const errorContext = useErrorContext();
  const session = useSession();
  const [componentState, setComponentState] = useState({
    email: '',
    password: '',
    error: null,
    isLoading: false,
    isSuccess: false,
    isError: false
  });
  useEffect(() => {
    if (session.user) {
      history.goBack();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const handleStateChange = (name, value) => {
    setComponentState({
      ...componentState,
      [name]: value
    });
  };

  const handleGuestSignin = () => {
    setComponentState({
      ...componentState,
      email: 'pesto@booktown.com',
      password: 'Pesto@123'
    });
    handleSignin('self');
  };

  const handleSignin = async (providerName, event) => {
    event?.preventDefault();
    setComponentState({ ...componentState, isLoading: true });
    if (providerName === 'google') {
      try {
        const userCred = await firebase
          .auth()
          .signInWithPopup(googleAuthProvider);
        if (userCred) {
          history.push(HOME);
        } else {
          toast.error('Error signing in');
        }
      } catch (error) {}
    } else if (providerName === 'self') {
      try {
        const userCred = await firebase
          .auth()
          .signInWithEmailAndPassword(
            componentState.email,
            componentState.password
          );
        if (userCred) {
          history.push(HOME);
        }
        setComponentState({
          ...componentState,
          isLoading: false,
          isSuccess: true,
          isError: false
        });
      } catch (err) {
        errorContext.showError(err.code);
        setComponentState({
          ...componentState,
          isLoading: false,
          isSuccess: false,
          isError: true,
          error: err
        });
      }
    } else if (providerName === 'facebook') {
      try {
        const userCred = await firebase
          .auth()
          .signInWithPopup(facebookAuthProvider);
        if (userCred) {
          history.push(HOME);
        } else {
          toast.error('Error signing in');
        }
      } catch (error) {}
    }
  };

  return {
    componentState,
    handleStateChange,
    handleSignin,
    handleGuestSignin
  };
};

export default useSigninContainer;
