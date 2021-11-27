import styled from 'styled-components';

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: ${(props) => (props.width ? props.width : 'auto')};
  .input-label-error {
    color: red;
  }
  input {
    box-sizing: border-box;
    padding: ${(props) => props.theme.size.sm};
    width: auto;
    border: none;
    outline: none;
    color: ${(props) => props.theme.colors.primaryLight};
    border-radius: ${(props) => props.theme.size.xsm};
    margin: 5px 0;
    background-color: ${(props) => props.theme.colors.secondary};
  }
  textarea {
    box-sizing: border-box;
    resize: none;
    padding: ${(props) => props.theme.size.sm};
    width: auto;
    border: none;
    outline: none;
    margin: 5px 0;
    color: ${(props) => props.theme.colors.primaryLight};
    border-radius: ${(props) => props.theme.size.xsm};
    background-color: ${(props) => props.theme.colors.secondary};
  }
  .signup-input {
    margin: 0 2px;
  }
  .input-container {
    display: flex;
    justify-content: space-evenly;
    width: 100%;
    height: 100%;
    align-items: center;
    .input-prefix,
    .input-postfix {
      padding: ${(props) => props.theme.size.sm};
      height: 100%;
      width: 10%;
      text-align: center;
      box-sizing: border-box;
    }
  }
`;
