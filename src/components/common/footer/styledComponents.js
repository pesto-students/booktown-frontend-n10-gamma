import styled from 'styled-components';

export const FooterContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  height: 100vh;
  background-image: url('https://images.unsplash.com/photo-1535905557558-afc4877a26fc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1080&q=100');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.secondary};
  & {
    @media (max-width: ${(props) => props.theme.breakpoints.ipad}) {
      flex-direction: column;
      height: auto;
    }
  }
  .footer-link {
    text-decoration: none;
    color: ${(props) => props.theme.colors.secondary};
  }
`;
export const FooterCards = styled.div`
  text-align: center;
  ${(props) => ({
    height: props.height ? props.height : 'auto',
    width: props.width ? props.width : '300px',
    color: props.theme.colors.secondary
  })};

  .footer-card-title {
    ${(props) => ({ ...props.theme.fonts.h4 })};
  }
  .footer-card-text {
    ${(props) => ({ ...props.theme.fonts.text1 })};
    font-weight: 500;
    cursor: pointer;
    &:hover {
      text-decoration: underline;
      transition: width 0.5s ease-in-out;
    }
  }
`;

export const FooterSocial = styled.div`
  width: 100%;
  height: 100px;
  text-align: center;
  justify-content: center;
  align-items: center;
  .footer-social-icon {
    margin: 0 10px;
    cursor: pointer;
    opacity: 0.6;
    vertical-align: middle;
    &:hover {
      opacity: 1;
    }
  }
  .footer-copywrite {
    ${(props) => ({ ...props.theme.fonts.text1 })};
    margin: 0 10px;
  }
`;
