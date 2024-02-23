import React from 'react';
import { Puff } from 'react-loader-spinner';

const Loader = () => {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh', // Adjust the height based on your layout
    }}>
      <Puff
        height={80}
        width={80}
        radius={9}
        color="red"
        ariaLabel="loading"
        wrapperStyle={{}} // You can add additional wrapper styles here
        wrapperClassName="" // You can add additional wrapper class names here
      />
    </div>
  );
};

export default Loader;
