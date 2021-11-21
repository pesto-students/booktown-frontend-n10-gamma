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
  & {
    @media (max-width: ${650}px) {
      .header-group-1 {
        width: 80%;
      }
    }
  }
`;

export const HeaderCard = styled.div`
  display: flex;
  justify-content: space-space-evenly;
  align-items: center;
  box-sizing: border-box;
  ${(props) => ({
    width: props.width ? props.width : 'auto'
  })};
`;

export const HeaderRight = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 40%;
  .header-right-content {
    opacity: 0.6;
    cursor: pointer;
    &:hover {
      opacity: 1;
    }
  }
  & {
    @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
      justify-content: flex-end;
      .header-right-content {
        margin: 0 15px;
      }
    }
    @media (max-width: ${(props) => props.theme.breakpoints.ipad}) {
      justify-content: flex-end;
      .header-right-content {
        margin: 0 5px;
      }
    }
    @media (max-width: ${650}px) {
      .header-right-content {
        display: none;
      }
    }
  }
`;

export const HeaderTitle = styled.div`
  ${(props) => ({ ...props.theme.fonts.h4 })}
  margin: 0;
  padding: 0;
`;
export const HeaderProfile = styled.div`
  height: 70px;
  width: 70px;
  border-radius: 50%;
  text-align: center;
  line-height: 70px;
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
