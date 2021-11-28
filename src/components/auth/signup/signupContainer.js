import React from 'react';
import * as yup from 'yup';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import toast from 'react-hot-toast';

const useSignupContainer = (props) => {
  const [signupForm, setSignupForm] = React.useState({
    email: '',
    password: '',
    confirmPassword: '',
    firstName: '',
    lastName: ''
  });
  const [errors, setErrors] = React.useState({
    isError: false,
    errors: {}
  });

  const handleCreateAccount = async () => {
    __validate(signupForm).then((validationResult) => {
      if (!validationResult.isError) {
        firebase
          .auth()
          .createUserWithEmailAndPassword(signupForm.email, signupForm.password)
          .then((user) => {
            user.user.updateProfile({
              displayName: `${signupForm.firstName} ${signupForm.lastName}`
            });
          })
          .catch((error) => {
            toast.error(error.message);
            setErrors({
              isError: true,
              errors: {}
            });
          });
      } else {
        setErrors(() => ({
          isError: true,
          errors: validationResult.errors.errors
        }));
      }
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSignupForm({ ...signupForm, [name]: value });
  };

  const __validate = async (data) => {
    const schema = yup.object().shape({
      email: yup.string().email('Invalid email').required('Required'),
      password: yup
        .string()
        .min(6, 'Password must be at least 6 characters')
        .required('Required'),
      confirmPassword: yup
        .string()
        .oneOf([yup.ref('password'), null], 'Passwords must match')
        .required('Required'),
      firstName: yup.string().required('Required'),
      lastName: yup.string().required('Required')
    });

    return schema
      .validate(data, { abortEarly: false })
      .then(() => {
        return { isError: false, errors: {} };
      })
      .catch((err) => {
        const errors = { isError: true, errors: {} };
        err.inner.forEach((error) => {
          errors.errors[error.path] = error.message;
        });
        return { isError: true, errors };
      });
  };

  return {
    handleChange,
    handleCreateAccount,
    signupForm,
    errors
  };
};

useSignupContainer.propTypes = {};

export default useSignupContainer;
