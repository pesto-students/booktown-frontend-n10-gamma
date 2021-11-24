import styled from 'styled-components';
export const HomeContainer = styled.div`
  width: 99vw;
  height: 100vh;
  display: flex;
  position: relative;
  img {
    object-fit: fill;
    height: 100%;
    width: 99vw;
  }
`;

export const HomeBannerOverlapper = styled.div`
  width: 390px;
  flex-direction: column;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 5%;
  .banner-overlapper-title {
    ${(props) => ({ ...props.theme.fonts.h1 })}
    color: ${(props) => props.theme.colors.secondary};
  }
  .banner-overlapper-slogan {
    color: ${(props) => props.theme.colors.secondary};
    ${(props) => ({ ...props.theme.fonts.h5 })}
  }
  .banner-overlapper-text {
    color: black;
    ${(props) => ({ ...props.theme.fonts.body1 })}
  }
  .overlapper-btn-container {
    display: flex;
    justify-content: space-between;
  }
  .overlapper-btn {
    width: 150px;
    height: 50px;
  }
  .overlapper-btn-buy {
    background-color: ${(props) => props.theme.colors.primary};
    color: ${(props) => props.theme.colors.secondary};
    &:hover {
      background: transparent;
      color: ${(props) => props.theme.colors.primary};
      border: 1px solid ${(props) => props.theme.colors.secondary};
    }
  }
  .overlapper-btn-sell {
    background-color: ${(props) => props.theme.colors.secondary};
    color: ${(props) => props.theme.colors.primary};
    &:hover {
      background: transparent;
      color: ${(props) => props.theme.colors.secondary};
      border: 1px solid ${(props) => props.theme.colors.primary};
    }
  }
`;
