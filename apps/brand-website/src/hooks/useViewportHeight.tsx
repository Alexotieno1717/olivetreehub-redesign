import { useState, useEffect } from 'react';

const useViewportHeight = () => {
    const [viewportHeight, setViewportHeight] = useState(0);

    useEffect(() => {
    const handleResize = () => {
      setViewportHeight(window.innerHeight);
    };

    // Initial calculation
    handleResize();

    // Event listener for window resize
    window.addEventListener('resize', handleResize);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return viewportHeight
}

export default useViewportHeight
