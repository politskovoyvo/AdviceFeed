import { useState, useEffect } from 'react';

const getWindowDimensions = () => {
    const { innerWidth, innerHeight } = window;
    return {
        width: innerWidth,
        height: innerHeight
    };
};
const useWindowDimensions = () => {
    const [windowDimensions, setWindowDimensions] = useState({ width: 0, height: 0 });
    const handleResize = () => {
        setWindowDimensions(getWindowDimensions());
    };
    useEffect(() => {
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    return windowDimensions;
};

export { useWindowDimensions };
