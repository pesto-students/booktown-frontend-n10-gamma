import React from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { ErrorCodeAndMessage } from '../config/ErrorCodeAndMessage';

export const ErrorContext = React.createContext({});
const ErrorContextProvider = ({ children }) => {
  const [componentState, setComponentState] = React.useState({
    error: {
      code: null,
      message: null
    },
    isLoading: false,
    errorCode: null,
    errorMessage: null,
    showError: false
  });

  const showError = (errorCode, errorMessage) => {
    let error = { message: errorMessage, code: errorCode };
    if (!error.message) {
      error = ErrorCodeAndMessage[error.code];
      toast(error.message);
    } else {
      toast(errorMessage || 'Error');
    }
    setComponentState({
      ...componentState,
      showError: true,
      error
    });
    setTimeout(() => {
      setComponentState({
        ...componentState,
        showError: false
      });
    }, 5000);
  };

  const context = {
    showError
  };

  return (
    <ErrorContext.Provider value={context}>
      <Toaster position="top-right" reverseOrder={false} />
      {children}
    </ErrorContext.Provider>
  );
};

export default ErrorContextProvider;
