import { jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';
import { useSliderContext } from './slider-provider.js';

const UISliderTrack = forwardRef((props, ref) => {
    const { className = '', noneStyles = false, ...rest } = props;
    const { getTrackProps } = useSliderContext();
    const classNames = noneStyles ? '' : 'h-1.5 bg-rus-100';
    return (jsx("div", { ...getTrackProps(rest, ref), className: `${classNames} ${className} w-full overflow-hidden rounded-xl aria-disabled:grayscale` }));
});
UISliderTrack.displayName = 'UISliderTrack';

export { UISliderTrack };
