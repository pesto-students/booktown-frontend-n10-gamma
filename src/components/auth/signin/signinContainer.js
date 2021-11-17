import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { useState } from 'react';
import { googleAuthProvider } from '../../../config/firebase/authProviders';
import useErrorContext from '../../../hooks/useErrorContext';

const useSigninContainer = (props) => {
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
    } else if (providerName === 'self') {
      try {
        const userCred = await firebase
          .auth()
          .signInWithEmailAndPassword(
            componentState.email,
            componentState.password
          );
        setComponentState({
          ...componentState,
          isLoading: false,
          isSuccess: true,
          isError: false
        });
      } catch (err) {
        console.log(err.code, err.message);
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
