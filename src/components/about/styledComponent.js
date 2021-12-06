import styled from 'styled-components';

export const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background-color: #f5f5f5;
`;
export const About = styled.div`
  display: flex;
  flex-direction: column;
  width: 600px;
  align-items: center;
  justify-content: center;
  background-color: #f5f5f5;
  border: 1px solid #e5e5e5;
  padding: 10px;
  .about-title {
    ${({ theme }) => theme.fonts.h3};
    color: ${({ theme }) => theme.colors.primery};
  }
  .about-subtitle {
    color: ${({ theme }) => theme.colors.primeryLight};
    border-bottom: 1px solid ${({ theme }) => theme.colors.primeryLight};
  }
  .about-text {
    color: ${({ theme }) => theme.colors.primeryLight};
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
