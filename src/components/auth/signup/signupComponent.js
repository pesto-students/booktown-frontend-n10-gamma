import React from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import { Button, Header, Input } from '../../common';
import useSignupContainer from './signupContainer';
import {
  InputContainer,
  SignupComponentTitle,
  SignUpContainer
} from './styledComponents';

const SignupComponent = (props) => {
  const [recaptcha, setRecaptcha] = React.useState(true);
  const { handleChange, handleCreateAccount, signupForm, errors } =
    useSignupContainer();
  return (
    <>
      <Header isSearchBarHide={true} />
      <SignUpContainer>
        <SignupComponentTitle>SignUp</SignupComponentTitle>
        <form className="signup-form">
          <InputContainer>
            <Input
              width="100%"
              className="signup-form-inputs"
              type="text"
              name="firstName"
              placeholder="First Name"
              label="First Name"
              value={signupForm.firstName}
              onChange={handleChange}
              error={errors.errors.firstName}
            />
          </InputContainer>
          <InputContainer>
            <Input
              width="100%"
              className="signup-form-inputs"
              type="text"
              name="lastName"
              placeholder="Last Name"
              label="Last Name"
              value={signupForm.lastName}
              onChange={handleChange}
              error={errors.errors.lastName}
            />
          </InputContainer>
          <InputContainer>
            <Input
              width="100%"
              className="signup-form-inputs"
              type="email"
              name="email"
              placeholder="Email"
              label="Email"
              value={signupForm.email}
              onChange={handleChange}
              error={errors.errors.email}
            />
          </InputContainer>
          <InputContainer>
            <Input
              width="100%"
              className="signup-form-inputs"
              type="password"
              name="password"
              placeholder="Password"
              label="Password"
              value={signupForm.password}
              onChange={handleChange}
              error={errors.errors.password}
            />
          </InputContainer>
          <InputContainer>
            <Input
              width="100%"
              className="signup-form-inputs"
              type="password"
              name="confirmPassword"
              placeholder="Enter password again"
              label="Confirm Password"
              value={signupForm.confirmPassword}
              onChange={handleChange}
              error={errors.errors.confirmPassword}
            />
          </InputContainer>
        </form>
        <Button
          className="signup-form-button"
          onClick={handleCreateAccount}
          disabled={recaptcha}
          style={{ margin: '10px 0', width: '320px' }}
          text="SignUp"
        />
        <ReCAPTCHA
          sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
          onChange={(e) => e && setRecaptcha(false)}
        />
      </SignUpContainer>
    </>
  );
};

SignupComponent.propTypes = {};

export default SignupComponent;
