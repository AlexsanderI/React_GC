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

    // return () => {
    //   window.addEventListener('resize', handelResize);
    // };
  }, []);
  const { width, height } = dimantions;
  return <div className="dimensions">{`${width}px - ${height}px`}</div>;
};

// class Dimensions extends React.Component {
//   state = {
//     width: null,
//     height: null,
//   };

//   componentDidMount() {
//     window.addEventListener('resize', this.onResize);
//     const { innerWidth, innerHeight } = window;
//     this.setDimensions(innerWidth, innerHeight);
//   }

//   componentWillUnmount() {
//     window.removeEventListener('resize', this.onResize);
//   }

//   onResize = e => {
//     const { innerWidth, innerHeight } = e.target;
//     this.setDimensions(innerWidth, innerHeight);
//   };

//   setDimensions = (width, height) => {
//     this.setState({
//       width,
//       height,
//     });
//     document.title = `${width} x ${height}`;
//   };

//   render() {
//     return <div className="dimensions">{`${this.state.width}px - ${this.state.height}px`}</div>;
//   }
// }

export default Dimensions;
