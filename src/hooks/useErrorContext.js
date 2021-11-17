import { useContext } from 'react';
import { ErrorContext } from '../contextProviders/ErrorContextProvider';

const useErrorContext = (props) => {
  const context = useContext(ErrorContext);
  if (context === undefined) {
    throw new Error('useErrorContext can only be used inside AuthProvider');
  }
  return context;
};

useErrorContext.propTypes = {};

export default useErrorContext;
