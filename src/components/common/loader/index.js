import React from 'react';
import styled from 'styled-components';
import ReactLoader from 'react-loader-spinner';
import propTypes from 'prop-types';
/**
 *
 * @param {{
 *  type:('Audio' | 'BallTriangle' |'Bars'|'Circles'|'Grid'|'Hearts'|'Oval'|'Puff'|'Rings'|'TailSpin'|'ThreeDots'|'Watch'|'RevolvingDot'|'Triangle'|'Plane'|'MutatingDots' |'CradleLoader')
 * }} param0
 * @returns
 */
const Loader = ({
  type = 'Circles',
  loaderColor = '#F5F5F6',
  height = 100,
  width = 100,
  timeout = 1000000000
}) => {
  return (
    <LoaderContainer>
      <ReactLoader
        type={type}
        color={loaderColor}
        height={height}
        width={width}
        timeout={timeout}
      />
    </LoaderContainer>
  );
};

const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background-color: ${(props) => props.theme.colors.primary};
`;

Loader.propTypes = {
  type: propTypes.string,
  loaderColor: propTypes.string,
  height: propTypes.number,
  width: propTypes.number,
  timeout: propTypes.number
};

export default Loader;
