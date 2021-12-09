import styled from 'styled-components';
export const HomeContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  position: relative;
  background-image: url('https://images.unsplash.com/photo-1535905557558-afc4877a26fc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1080&q=100');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  img {
    object-fit: fill;
    height: 100%;
    width: 100vw;
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
    color:white;
  }
  .banner-overlapper-slogan {
    color: white;
    ${(props) => ({ ...props.theme.fonts.h5 })}
  }
  .banner-overlapper-text {
    color: rgba(255, 255, 255, 0.8);
    ${(props) => ({ ...props.theme.fonts.body1 })};
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
  & {
    @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
      width: 100%;
      left: 0;

      text-align: left;
    }
  }
`;
