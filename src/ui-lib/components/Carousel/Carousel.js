import { jsx } from 'react/jsx-runtime';
import { forwardRef, useMemo } from 'react';
import { CarouselContext } from './carousel-context.js';
import { useCarousel } from './use-carousel.js';

const UICarousel = forwardRef((props, ref) => {
    const { children, className, ...rest } = props;
    const { ...ctx } = useCarousel({ ...rest });
    const context = useMemo(() => ctx, [ctx]);
    return (jsx(CarouselContext.Provider, { value: context, children: jsx("div", { ref: ref, className: `flex flex-col max-h-full gap-2 ` + className, children: children }) }));
});
UICarousel.displayName = 'UICarousel';

export { UICarousel };
