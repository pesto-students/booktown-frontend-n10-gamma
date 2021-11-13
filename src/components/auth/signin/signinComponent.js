import React from 'react';
import { Input } from '../../common';
import useSigninContainer from './signinContainer';
import { SignInContainer, SignInFormContainer } from './styledComponents';
import { Button } from '../../common';
import FeatherIcon from 'feather-icons-react';
import { Link } from 'react-router-dom';

const SignIn = (props) => {
  const { handleStateChange, componentState } = useSigninContainer();
  return (
    <SignInContainer>
      <SignInFormContainer>
        <h2>Login</h2>
        <form className="login-form">
          <div className="login-inputs">
            <Input
              type="text"
              label="Email"
              placeholder="Enter Email"
              error=""
              name="email"
              onChange={(e) => handleStateChange('email', e.target.value)}
              value={componentState?.email}
            />
          </div>
          <div className="login-inputs">
            <Input
              type="password"
              label="Password"
              placeholder="Enter password"
              error=""
              name="password"
              onChange={(e) => handleStateChange('password', e.target.value)}
              value={componentState?.password}
            />
          </div>
          <Button style={{ width: '100%', margin: '10px 0' }} text="Login" />
          <Button
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
