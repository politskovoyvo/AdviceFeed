import { jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';
import { useCarouselContext } from './carousel-context.js';
import { getIndicatorScale } from './methods/indeicator-scale.js';

const UICarouselIndicator = forwardRef((props, ref) => {
    const { className = '' } = props;
    const { slides, select, selectedIndex } = useCarouselContext();
    return (jsx("div", { ref: ref, className: `flex items-center justify-center gap-1 ${className}`, children: slides.map((_slide, index) => {
            const scale = getIndicatorScale(selectedIndex, index);
            const isActive = index === selectedIndex;
            return (jsx("div", { className: `h-3 w-3 rounded-full scale-${scale} ease cursor-pointer transition-all duration-200 ` +
                    (isActive ? 'bg-primary-700' : 'bg-rus-100'), onClick: () => select(index) }, index));
        }) }));
});
UICarouselIndicator.displayName = 'UICarouselIndicator';

export { UICarouselIndicator };
