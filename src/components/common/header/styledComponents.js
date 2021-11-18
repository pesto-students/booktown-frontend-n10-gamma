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
  justify-content: space-space-evenly;
  align-items: center;
  box-sizing: border-box;
  ${(props) => ({
    width: props.width ? props.width : 'auto'
  })};
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
  border: 1px solid white;
  text-align: center;
  line-height: 70px;
`;