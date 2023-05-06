import React from 'react';

class WidthService extends React.Component {
  constructor() {
    super();
    // this.width = window.innerWidth;
    this.state = {
      width: undefined,
      height: undefined,
    };
  }

  handleResize = () => {
    this.setState({
      width: this.width,
      //   height: window.innerHeight,
    });
  };

  componentDidMount() {
    window.addEventListener('resize', this.handleResize);
    this.handleResize();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }
}

export { WidthService };

// import { useState, useEffect } from 'react';

// function useWindowSize() {
//   const [windowSize, setWindowSize] = useState({
//     width: undefined,
//     height: undefined,
//   });
//   useEffect(() => {
//     function handleResize() {
//       setWindowSize({
//         width: window.innerWidth,
//         height: window.innerHeight,
//       });
//     }
//     window.addEventListener('resize', handleResize);
//     handleResize();
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);
//   return windowSize;
// }

// export { useWindowSize };
