import styled from 'styled-components';
export const FooterContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
  width: 100vw;
  height: 100vh;
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.secondary};
`;
export const FooterCards = styled.div`
  height: 400px;
  width: 300px;
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
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100px;
  text-align: center;
`;
