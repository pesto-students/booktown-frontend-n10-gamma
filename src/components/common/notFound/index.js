import React from 'react';

const NotFound = ({ title = 'Data not found', subtitle }) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100vw',
        height: '100vh'
      }}>
      {title}
    </div>
  );
};

NotFound.propTypes = {};

export default NotFound;
