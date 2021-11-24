import React from 'react';
import { Container, ErrorMessageContainer } from './styledComponents';

const Error = (props) => {
  return (
    <Container>
      <ErrorMessageContainer>
        <h1>404 Page Not Found</h1>
      </ErrorMessageContainer>
    </Container>
  );
};

Error.propTypes = {};

export default Error;
