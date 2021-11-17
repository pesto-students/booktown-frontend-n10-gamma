import styled from 'styled-components';

export const SignInContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  color: ${(props) => props.theme.colors.primary};
`;

export const SignInFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 320px;
  text-align: center;
  color: ${(props) => props.theme.colors.primary};
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
  .login-inputs {
    margin: 10px 0px;
  }
  form {
    box-sizing: border-box;
    width: 100%;
    padding-left: 10px;
    padding-right: 10px;
  }
`;
