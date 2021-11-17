import React from 'react';
import styled from 'styled-components';
import { ErrorCodeAndMessage } from '../config/ErrorCodeAndMessage';

const ErrorContainer = styled.div`
  position: absolute;
  bottom: 30px;
  right: 20px;
  max-width: 300px;
  min-width: 200px;
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.secondary};
  padding: 10px;
  transition: all 0.5s ease-in-out;
`;

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
      {componentState.showError && (
        <ErrorContainer>{componentState.error.message}</ErrorContainer>
      )}
      {children}
    </ErrorContext.Provider>
  );
};

export default ErrorContextProvider;
