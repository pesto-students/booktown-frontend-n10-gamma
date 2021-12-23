import styled from 'styled-components';

export const MenuContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 30%;
  .close-icon {
    display: none;
  }
`;
export const MenuItem = styled.div`
  opacity: 0.7;
  cursor: pointer;
  &:hover {
    opacity: 1;
  }
`;
export const HeaderContainer = styled.div`
  padding: 0 10px;
  display: flex;
  justify-content: space-between;
  height: 70px;
  box-sizing: border-box;
  align-items: center;
  color: white;
  background: ${(props) => props.theme.colors.primary};
  flex-wrap: wrap;
  .link {
    color: white;
    text-decoration: none;
  }
  .hamburg-menu {
    display: none;
    cursor: pointer;
    opacity: 0.5;
    width: 10%;
    text-align: center;
    &:hover {
      opacity: 1;
    }
  }
  .brand-name-icon {
    margin-left: 10px;
  }
  & {
    @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
      ${MenuContainer} {
        display: none;
        position: fixed;
        top: 0;
        left: 0;
        flex-direction: column;
        height: 100vh;
        width: 50vw !important;
        z-index: 100;
        font-size: 20px;
        background-color: ${(props) => props.theme.colors.primaryLight};
        margin-left: 50%;
        transition: all 0.5s ease-in-out;
        .close-icon {
          display: block;
          text-align: right;
          &:hover {
            border: none !important;
          }
        }
        ${MenuItem} {
          text-align: center;
          &:hover {
            border-bottom: 1px solid rgba(255, 255, 255, 0.5);
          }
          margin: 10px 0;
          padding: 10px;
        }
      }
      .hamburg-menu {
        display: block;
      }
    }
    @media (max-width: ${(props) => props.theme.breakpoints.desktop}) {
      ${MenuContainer} {
        width: 40%;
      }
    }
  }
`;
export const SearchBarContainer = styled.div`
  flex: 0.6;
  margin-right: 10%;
  height: 100%;
`;
export const HeaderLeftContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  width: 60%;
  & {
    @media (max-width: ${(props) => props.theme.breakpoints.desktop}) {
      ${SearchBarContainer} {
        flex: 0.9;
        margin-right: 5%;
      }
    }

    @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
      width: 90%;
      ${SearchBarContainer} {
        flex: 0.8;
        margin-right: 2%;
      }
    }
    @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
      ${SearchBarContainer} {
        flex: 1;
        margin: 0 2%;
      }
    }
  }
`;
export const CartMenu = styled.div`
  position: relative;
  span {
    position: absolute;
    bottom: 17px;
    left: 12px;
    color: tomato;
  }
`;
export const BrandName = styled.h4`
  padding: 0;
  margin: 0;
`;
