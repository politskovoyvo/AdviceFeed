import { jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';
import { useSliderContext } from './slider-provider.js';
import { trackFilledOrientation } from './tailwind-variations/orientation.js';

const UISliderTrackFiller = forwardRef((props, ref) => {
    const { className = '', noneStyles = false, ...rest } = props;
    const { thumbPercent, orientation } = useSliderContext();
    const filledClassNames = trackFilledOrientation[orientation];
    const classNames = noneStyles ? '' : 'bg-primary-700';
    return (jsx("div", { ref: ref, ...rest, style: { '--transform': `calc(${thumbPercent}% - 100%)` }, className: `${filledClassNames} ${classNames} ${className} h-full w-full transform-gpu` }));
});
UISliderTrackFiller.displayName = 'UISliderTrackFiller';

export { UISliderTrackFiller };
