import React, { useState } from 'react';

const useSigninContainer = (props) => {
  // const [email, setEmail] = useState('');
  // const [componentState, setComponentState] = useState({
  //   email: '',
  //   password: ''
  // });

  const handleStateChange = (name, value) => {
    // setComponentState({
    //   ...componentState,
    //   [name]: value
    // });
  };

  return {
    // componentState,
    handleStateChange
  };
};

export default useSigninContainer;
