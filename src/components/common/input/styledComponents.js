import styled from 'styled-components';

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  .input-label-error {
    color: red;
  }
  input {
    box-sizing: border-box;
    padding: ${(props) => props.theme.size.sm};
    width: 100%;
    border: none;
    outline: none;
    color: ${(props) => props.theme.colors.primaryLight};
    border-radius: ${(props) => props.theme.size.xsm};
    margin: 5px 0;
    background-color: ${(props) => props.theme.colors.secondary};
  }
`;
