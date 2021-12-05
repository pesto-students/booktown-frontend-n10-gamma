import styled from 'styled-components';

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.secondary};
  height: 70px;
  width: 100%;
  padding: 10px 20px;
  box-sizing: border-box;
`;

export const HeaderCard = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  box-sizing: border-box;
  ${(props) => ({
    width: props.width ? props.width : 'auto'
  })};
  .link {
    color: ${(props) => props.theme.colors.secondary};
    text-decoration: none;
  }
  & {
    @media (min-width: 550px) {
      width: 500px;
    }
  }
`;

export const HeaderRight = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 40%;
  .header-right-content {
    margin: 0 20px;
    opacity: 0.6;
    cursor: pointer;
    & {
      @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
        margin: 0 5px;
      }
      @media (max-width: 600px) {
        display: block;
      }
    }
    &:hover {
      opacity: 1;
    }
  }
  .link {
    text-decoration: none;
    color: ${(props) => props.theme.colors.secondary};
    .cart-count {
      position: relative;
      span {
        position: absolute;
        bottom: 17px;
        left: 26px;
        color: tomato;
      }
    }
  }
`;

export const HeaderTitle = styled.div`
  ${(props) => ({ ...props.theme.fonts.h4 })}
  margin: 0;
  padding: 0;
`;

export const HamburgerContainer = styled(HeaderContainer)`
  position: fixed;
  top: 0;
  left: 0;
  display: none;
  border: 1px solid red;
  height: 100vh;
  width: 100vw;
  z-index: 100;
  transition: width 0.5s ease-in-out;
`;
