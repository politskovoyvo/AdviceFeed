import { jsx, Fragment, jsxs } from 'react/jsx-runtime';
import { useCarouselContext } from './carousel-context.js';

const UICarouselContent = (props) => {
    const { className = '' } = props;
    const { slides, selectedIndex } = useCarouselContext();
    return (jsx(Fragment, { children: jsxs("div", { className: `relative flex h-full w-full items-center justify-center overflow-hidden ${className}`, children: [jsx("div", { className: "absolute inset-0 w-full h-full object-fill blur-3xl [&_*]:w-full [&_*]:h-full [&_*]:object-cover", children: slides[selectedIndex]?.children }), jsx("div", { className: "z-1 h-full", children: slides[selectedIndex]?.children })] }) }));
};
UICarouselContent.displayName = 'UICarouselContent';

export { UICarouselContent };
