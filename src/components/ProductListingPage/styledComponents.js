import styled from 'styled-components';

const MainContainer = styled.div`
  display: flex;
  min-height: 100vh;
`;

const ProductListingPageContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: flex-start;
  width: 100%;
  padding: 0;
  margin: 0;
  background: ${(props) => props.theme.colors.secondary};
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
  display: flex;
  flex: 300px;
  color: #40394d;
  flex-direction: column;
  align-items: center;
  padding-left: 10px;
  padding-top: 10px;
  background: ${(props) => props.theme.colors.primaryLight};
  color: white;
  .side-bar-filter__btn {
    background: ${(props) => props.theme.colors.primary};
    &:hover {
      color: white;
    }
  }
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
  color: white;
  opacity: 0.6;
  &:hover {
    opacity: 1;
  }
`;
const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  width: 100%;
  .paginate-container {
    display: flex;
    width: 100%;
    justify-content: center;
    list-style: none;
    align-items: center;
    a {
      text-decoration: none;
      font-weight: bold;
      height: 25px;
      width: 25px;
      line-height: 22px;
      cursor: pointer;
      box-sizing: border-box;
      outline: none;
      &:hover {
        background-color: ${(props) => props.theme.colors.primaryLight};
        color: white;
        outline: none;
      }
    }
    .page-active {
      background-color: ${(props) => props.theme.colors.primary};
      color: ${(props) => props.theme.colors.secondary};
    }
    .page-item {
      margin: 0 5px;
      border: 1px solid #808080;
      height: 25px;
      width: 25px;
      border-radius: 50%;
      text-align: center;
      line-height: 22px;
      cursor: pointer;
      box-sizing: border-box;
      outline: none;
      &:hover {
        background-color: ${(props) => props.theme.colors.primaryLight};
        color: white;
      }
    }
    .page-item-prev,
    .page-item-next {
      a {
        color: ${(props) => props.theme.colors.primary};
        &:hover {
          color: white;
        }
      }
      border: 1px solid #808080;
      height: 25px;
      width: 25px;
      border-radius: 50%;
      text-align: center;
      line-height: 20px;
      &:hover {
        background-color: ${(props) => props.theme.colors.primaryLight};
      }
    }
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
  Star,
  PaginationContainer
};
