import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { useState } from 'react';
import { googleAuthProvider } from '../../../config/firebase/authProviders';
import useErrorContext from '../../../hooks/useErrorContext';
import { useHistory } from 'react-router-dom';
import { HOME } from '../../../router/types';
import toast from 'react-hot-toast';
const useSigninContainer = (props) => {
  const history = useHistory();
  const errorContext = useErrorContext();
  const [componentState, setComponentState] = useState({
    email: '',
    password: '',
    error: null,
    isLoading: false,
    isSuccess: false,
    isError: false
  });

  const handleStateChange = (name, value) => {
    setComponentState({
      ...componentState,
      [name]: value
    });
  };

  const handleSignin = async (providerName, event) => {
    event?.preventDefault();
    setComponentState({ ...componentState, isLoading: true });
    if (providerName === 'google') {
      const userCred = await firebase
        .auth()
        .signInWithPopup(googleAuthProvider);
      if (userCred) {
        history.push(HOME);
      } else {
        toast.error('Error signing in');
      }
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
        errorContext.showError(err.code, err.message);
        setComponentState({
          ...componentState,
          isLoading: false,
          isSuccess: false,
          isError: true,
          error: err
        });
      }
    }
  };

  return {
    componentState,
    handleStateChange,
    handleSignin
  };
};

export default useSigninContainer;
