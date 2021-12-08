import styled from 'styled-components';

const MainContainer = styled.div`
  display: flex;
`;

const ProductListingPageContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  padding: 0;
  margin: 0;
  background: ${(props) => props.theme.colors.secondary};
  .paginationBttns {
    position: relative;
    bottom: -5px;
    width: 80%;
    height: 40px;
    list-style: none;
    display: flex;
    justify-content: center;
    a {
      padding: 10px;
      margin: 8px;
      border-radius: 5px;
      border: 1px solid grey;
      color: grey;
      cursor: pointer;
      &:hover {
        border: 1px solid ${(props) => props.theme.colors.primary};
        color: ${(props) => props.theme.colors.primary};
      }
    }
  }
  .paginationActive {
    a {
      color: ${(props) => props.theme.colors.primary};
      background-color: lightgrey;
    }
  }
`;

const Image = styled.img`
  height: 250px;
  width: 190px;
  margin-top: -5vw;
  transform: scale(0.8);
  transition: all 1s ease-in-out;
  &:hover {
    background-color: lightgrey;
    transform: scale(1.1);
    cursor: pointer;
  }
`;

const Sidebar = styled.div`
  background: ${(props) => props.theme.colors.secondary};
  display: flex;
  flex: 25%;
  color: #40394d;
  flex-direction: column;
  align-items: center;
  .side-bar-filter__btn {
    margin: 10px;
    position: relative;
    left: -50px;
  }
  padding-left: 10px;
  margin-top: 10px;
`;

const SidebarOptions = styled.div`
  display: flex;
  flex-direction: column;
  .filter-option-title {
    ${(props) => props.theme.fonts.h4}
  }
`;

const Star = styled.div`
  margin-bottom: 8px;
`;

const Option = styled.div`
  display: flex;
  flex-direction: column;
`;

const CheckBox = styled.div`
  display: flex;
  align-items: center;

  flex-direction: row;
`;

const Options = styled.p`
  color: #808080;
  cursor: pointer;
  position: relative;
  bottom: -7px;
  right: -2px;

  &:hover {
    color: #242526;
  }
`;

export {
  Image,
  Sidebar,
  SidebarOptions,
  CheckBox,
  Options,
  ProductListingPageContainer,
  MainContainer,
  Option,
  Star
};
