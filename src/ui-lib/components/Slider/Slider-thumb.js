import { jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';
import { useSliderContext } from './slider-provider.js';

const UISliderThumb = forwardRef((props, ref) => {
    const { children, className = '', noneStyles = false, ...rest } = props;
    const { getThumbProps } = useSliderContext();
    const classNames = noneStyles
        ? ''
        : 'h-5 w-5 rounded-full border-2 border-primary-700 bg-walentine-100 focus:shadow-none focus-visible:shadow-focus focus-visible:shadow-primary-400 focus-visible:outline-0 aria-pressed:shadow-primary-400 aria-pressed:shadow-focus';
    return (jsx("button", { ...getThumbProps(rest, ref), type: "button", className: `${classNames} ${className} pointer-events-none absolute z-1 -translate-x-1/2 touch-none shadow-none transition-shadow aria-disabled:contrast-50 aria-disabled:grayscale aria-pressed:cursor-grabbing`, children: children }));
});
UISliderThumb.displayName = 'UISliderThumb';

export { UISliderThumb };
