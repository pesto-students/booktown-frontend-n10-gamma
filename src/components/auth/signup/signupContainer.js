import React from 'react';
import * as yup from 'yup';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import toast from 'react-hot-toast';
import { createUser } from '../../../graphql/mutation/user.mutation';
import { useMutation } from '@apollo/react-hooks';
import { HOME } from '../../../router/types';
import { useHistory } from 'react-router';

const useSignupContainer = (props) => {
  const history = useHistory();
  const [signupForm, setSignupForm] = React.useState({
    email: '',
    password: '',
    confirmPassword: '',
    firstName: '',
    lastName: ''
  });
  const [createUserMutation] = useMutation(createUser);

  const [errors, setErrors] = React.useState({
    isError: false,
    errors: {}
  });

  const onSignUpSuccess = (user) => {
    user.user.updateProfile({
      displayName: `${signupForm.firstName} ${signupForm.lastName}`
    });
    const userData = {
      firstName: signupForm.firstName,
      lastName: signupForm.lastName,
      email: signupForm.email,
      id: user.user.uid,
      password: signupForm.password
    };
    toast.promise(
      createUserMutation({
        variables: {
          payload: userData
        }
      }),
      {
        loading: 'Setting User profile...',
        success: (res) => {
          if (res.errors) {
            toast.error('Setting user profile failed');
            return;
          } else if (
            res.data.createUser?.status === 500 ||
            res.data.createUser?.status === 400
          ) {
            toast.error(res.data.createUser?.message);
            return;
          }
          setTimeout(() => {
            history.push(HOME);
          }, 2000);

          return 'User profile set successfully';
        },
        error: (err) => {
          user.user.delete();
          return 'User profile set failed';
        }
      }
    );
  };
  const handleCreateAccount = async () => {
    __validate(signupForm).then((validationResult) => {
      if (!validationResult.isError) {
        toast.promise(
          firebase
            .auth()
            .createUserWithEmailAndPassword(
              signupForm.email,
              signupForm.password
            ),
          {
            loading: 'Signing up...',
            success: (user) => {
              onSignUpSuccess(user);
              return 'Account successfully created';
            },
            error: (error) => {
              toast.error(error.message);
              setErrors({
                isError: true,
                errors: {}
              });
              return 'Error creating account!';
            }
          }
        );
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
      email: yup.string().email('Invalid email').required('Email required'),
      password: yup
        .string()
        .min(6, 'Password must be at least 6 characters')
        .required('Password required'),
      confirmPassword: yup
        .string()
        .oneOf([yup.ref('password'), null], 'Passwords must match')
        .required('Confirm password required'),
      firstName: yup.string().required('First name required'),
      lastName: yup.string().required('Last name required')
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
