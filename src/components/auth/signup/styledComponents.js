import styled from 'styled-components';

export const SignUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  color: ${(props) => props.theme.colors.primary};
  .signup-form {
    display: flex;
    flex-direction: column;
    width: 320px;
    padding: 10px;
    box-sizing: border-box;
  }
  .signup-form-inputs {
    width: 100%;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  width: 100%;
`;

export const SignupComponentTitle = styled.h2`
  ${(props) => ({ ...props.theme.fonts.h2 })};
`;
