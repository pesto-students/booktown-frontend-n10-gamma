import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.secondary};
`;

export const ErrorMessageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
