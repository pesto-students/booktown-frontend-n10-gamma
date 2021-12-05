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

const Content = styled.div`
  display: flex;
  flex: 70%;
  position: relative;
  width: 100%;
  height: 100%;
  margin: 50px auto;
  padding: 50px 0 0;
  box-sizing: border-box;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const Card = styled.div`
  padding: 10px;
  width: 30%;
  border-radius: 15px;
  display: flex;

  flex-direction: column;
  position: relative;
  justify-content: center;
  text-align: center;
  transform: scale(0.8);
  transition: all 1s ease-in-out;
  margin-bottom: 50px;
  align-items: center;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 30px 50px 20px 50px;
  box-sizing: border-box;
  background-color: white;
  flex-wrap: wrap;
`;

const CardHeader = styled.div`
  display: flex;
  flex-direction: column;
  margin: 25px 0;
  align-items: center;
`;

const Button = styled.button`
  width: 130px;
  height: 35px;
  font-size: 14px;
  border-radius: 35px;
  background-color: black;
  cursor: pointer;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  overflow: hidden;
  position: relative;
  &:hover {
    background-color: white;
    color: black;
  }
`;

const Sidebar = styled.div`
  background: ${(props) => props.theme.colors.secondary};
  display: flex;
  flex: 25%;
  color: #40394d;
  flex-direction: column;
  align-items: center;
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
  Content,
  Card,
  CardHeader,
  Button,
  Sidebar,
  SidebarOptions,
  CheckBox,
  Options,
  Container,
  ProductListingPageContainer,
  MainContainer,
  Option,
  Star
};
