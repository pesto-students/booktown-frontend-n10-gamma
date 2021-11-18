import styled from 'styled-components';
export const FooterContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  height: 100vh;
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.secondary};
  & {
    @media (max-width: ${400}px) {
      flex-direction: column;
      height: auto;
    }
  }
`;
export const FooterCards = styled.div`
  ${(props) => ({
    height: props.height ? props.height : '400px',
    width: props.width ? props.width : '300px'
  })}
  color: ${(props) => props.theme.colors.secondary};
  text-align: center;
  .footer-card-title {
    ${(props) => ({ ...props.theme.fonts.h4 })};
  }
  .footer-card-text {
    ${(props) => ({ ...props.theme.fonts.text1 })};
    opacity: 0.6;
    cursor: pointer;
    &:hover {
      opacity: 1;
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
