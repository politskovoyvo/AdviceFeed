import { jsx } from 'react/jsx-runtime';
import { forwardRef, useState, useEffect } from 'react';
import { useSliderContext } from './slider-provider.js';

const UISliderMark = forwardRef((props, ref) => {
    const { value, noneStyles = false, className = '', ...rest } = props;
    const { trackRef, max, min } = useSliderContext();
    const [left, setLeft] = useState(0);
    const classNames = noneStyles ? '' : '-bottom-full -translate-x-1/2 text-sm text-yuri-400 dark:text-walentine-100';
    useEffect(() => {
        setLeft(((value - min) / (max - min)) * 100);
    }, [max, min, trackRef, value]);
    return jsx("span", { ...rest, style: { left: `${left}%` }, ref: ref, className: `absolute ${classNames} ${className}` });
});
UISliderMark.displayName = 'UISliderMark';

export { UISliderMark };
