import { useState, useEffect } from 'react';
import { observeElementSize } from '../methods/observe-element-size.js';

function useSize(ref) {
    const [size, setSize] = useState({ width: 0, height: 0 });
    useEffect(() => {
        const observer = observeElementSize(ref.current, (elementSize) => {
            if (!elementSize)
                return;
            const { width, height } = elementSize;
            setSize({ width, height });
        });
        return () => {
            observer?.();
        };
    }, [ref]);
    return size;
}

export { useSize };
