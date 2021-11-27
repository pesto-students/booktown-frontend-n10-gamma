import styled from 'styled-components';

export const MyButton = styled.button`
  text-align: center;
  ${(props) => ({
    background: props.theme.colors.secondary,
    color: props.theme.colors.primary,
    borderRadius: props.round ? `${props.round}px` : props.theme.size.radius
  })}
  border: none;
  padding: ${(props) => props.theme.size.sm};
  box-sizing: border-box;

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
    background-color: ${(props) => props.theme.colors.primary};
    color: ${(props) => props.theme.colors.secondary};
    transition: 0.3s all linear;
    cursor: pointer;
  }
`;
