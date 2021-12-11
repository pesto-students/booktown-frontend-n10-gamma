import styled from 'styled-components';

export const SignInContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-image: url('https://images.unsplash.com/photo-1561657819-51c0511e35ab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=100');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.secondary};
`;

export const SignInFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 320px;
  text-align: center;
  color: ${(props) => props.theme.colors.secondary};
  .login-social-container {
    display: flex;
    justify-content: space-around;
    width: 80%;
    margin: 10px auto;
    .login-social-icon-github {
      &:hover {
        color: #9845a5;
        cursor: pointer;
      }
    }
    .login-social-icon-facebook {
      &:hover {
        color: #3b5998;
        cursor: pointer;
      }
    }
  }
  .form-login-input {
    width: 100%;
  }
  .login-inputs {
    margin: 10px 0px;
  }
  .login-form {
    box-sizing: border-box;
    width: 100%;
    padding-left: 10px;
    padding-right: 10px;
  }
`;
