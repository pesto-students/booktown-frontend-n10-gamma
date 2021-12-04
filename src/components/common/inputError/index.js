import styled from 'styled-components';

const InputError = ({ error }) => {
  return (
    <ErrorContainer>
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </ErrorContainer>
  );
};

export default InputError;

const ErrorContainer = styled.div``;
const ErrorMessage = styled.span`
  color: ${({ theme }) => theme.colors.error};
`;
