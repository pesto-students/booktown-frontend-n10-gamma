import React from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const useSignupContainer = (props) => {
  const [componentState, setComponentState] = React.useState({
    email: '',
    password: '',
    confirmPassword: '',
    firstName: '',
    lastName: '',
    error: null,
    isLoading: false,
    isSuccess: false,
    isError: false
  });

  const handleCreateAccount = async () => {
    setComponentState({ ...componentState, isLoading: true });
    const userCred = await firebase
      .auth()
      .createUserWithEmailAndPassword(
        componentState.email,
        componentState.password
      );
    // .catch((error) => {
    //   setComponentState({
    //     ...componentState,
    //     isLoading: false,
    //     isSuccess: false,
    //     isError: true,
    //     error
    //   });
    // });
    if (userCred) {
      console.log(userCred);
      userCred.user?.sendEmailVerification();
      setComponentState({
        ...componentState,
        isLoading: false,
        isSuccess: true,
        isError: false
      });
    }
  };

  const handleChange = (key, value) => {
    if (typeof key === 'object') {
      key = key.target.name;
      value = key.target.value;
    }
    setComponentState({ ...componentState, [key]: value });
  };

  return {
    handleChange,
    componentState,
    handleCreateAccount
  };
};

useSignupContainer.propTypes = {};

export default useSignupContainer;
