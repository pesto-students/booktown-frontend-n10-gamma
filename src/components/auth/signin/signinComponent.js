import React from 'react';
import { Input } from '../../common';
import useSigninContainer from './signinContainer';
import { SignInContainer, SignInFormContainer } from './styledComponents';
import { Button } from '../../common';
import FeatherIcon from 'feather-icons-react';
import { Link } from 'react-router-dom';

const SignIn = (props) => {
  const { handleStateChange, componentState, handleSignin } =
    useSigninContainer();
  return (
    <SignInContainer>
      <SignInFormContainer>
        <h2>Login</h2>
        <form className="login-form">
          <div className="login-inputs">
            <Input
              width="100%"
              style={{ border: '1px solid' }}
              type="text"
              label="Email"
              placeholder="Enter Email"
              error=""
              name="email"
              onChange={(e) => handleStateChange(e.target.name, e.target.value)}
              value={componentState?.email}
              className="form-login-input"
            />
          </div>
          <div className="login-inputs">
            <Input
              width="100%"
              style={{ border: '1px solid' }}
              type="password"
              label="Password"
              placeholder="Enter password"
              error=""
              name="password"
              onChange={(e) => handleStateChange(e.target.name, e.target.value)}
              value={componentState?.password}
              className="form-login-input"
            />
          </div>
          <Button
            onClick={(e) => {
              handleSignin('self', e);
            }}
            style={{ width: '100%', margin: '10px 0' }}
            text="Login"
          />
          <Button
            onClick={(e) => {
              handleSignin('google', e);
            }}
            style={{ width: '100%', margin: '10px 0' }}
            text="Google Login"
          />
          <div className="login-social-container">
            <FeatherIcon
              className="login-social-icon-github"
              icon="github"
              size="30"
            />
            <FeatherIcon
              className="login-social-icon-facebook"
              icon="facebook"
              size="30"
            />
          </div>
        </form>
        <div>
          <span>
            {`don't have account? `}
            <Link to="/SignUp">SignUp</Link>
          </span>
        </div>
      </SignInFormContainer>
    </SignInContainer>
  );
};

SignIn.propTypes = {};

export default SignIn;
