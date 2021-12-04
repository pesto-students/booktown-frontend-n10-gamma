import styled from 'styled-components';

export const MyButton = styled.button`
  text-align: center;
  ${(props) => ({
    background: props.theme.colors.primaryLight,
    color: props.theme.colors.secondary,
    borderRadius: props.round ? `${props.round}px` : props.theme.size.radius
  })}
  border: 1px solid ${(prop) => prop.theme.colors.primaryLight};
  padding: ${(props) => props.theme.size.sm};
  box-sizing: border-box;
  cursor: pointer;
  .styled-icon {
    ${(props) =>
      props.icon
        ? {
            verticalAlign: 'middle',
            marginLeft: '5px'
          }
        : {}}
  }

  &:disabled {
    background-color: rgba(200, 200, 200, 0.5);
    cursor: not-allowed;
    color: gray;
  }
  &:hover {
    background-color: ${(props) => props.theme.colors.secondary};
    color: ${(props) => props.theme.colors.primaryLight};
    border: 1px solid ${(prop) => prop.theme.colors.primaryLight};
    transition: 0.3s all linear;
  }
`;
