import styled from 'styled-components';

export const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.primaryLight}; ;
`;
export const About = styled.div`
  display: flex;
  flex-direction: column;
  width: 600px;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.secondary};
  padding: 10px;
  .about-title {
    ${({ theme }) => theme.fonts.h3};
  }
  .about-subtitle {
    border-bottom: 1px solid ${({ theme }) => theme.colors.primaryLight};
  }
  .about-text {
    margin: 10px 0;
  }
  .about-footer {
  }
  & {
    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
      width: 99% !important;
    }
  }
`;
