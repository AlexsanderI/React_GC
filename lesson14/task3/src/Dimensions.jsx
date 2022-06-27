import React, { useEffect, useState } from 'react';

const Dimensions = () => {
  const [dimantions, setDimensions] = useState({ width: null, height: null });

  useEffect(() => {
    const { innerWidth, innerHeight } = window;
    setDimensions({ width: innerWidth, height: innerHeight });
    const handelResize = e => {
      // eslint-disable-next-line no-shadow
      const { innerWidth, innerHeight } = e.target;
      setDimensions({ width: innerWidth, height: innerHeight });
    };
    window.addEventListener('resize', handelResize);

    return () => {
      window.removeEventListener('resize', handelResize);
    };
  }, []);
  const { width, height } = dimantions;
  return <div className="dimensions">{`${width}px - ${height}px`}</div>;
};

export default Dimensions;
