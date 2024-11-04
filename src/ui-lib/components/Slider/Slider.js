import { jsx, jsxs } from 'react/jsx-runtime';
import { forwardRef, useMemo } from 'react';
import { SliderProvider } from './slider-provider.js';
import { useSlider } from './use-slider.js';

const UISlider = forwardRef((props, ref) => {
    const { children, ...rest } = props;
    const { getInputProps, getWrapProps, ...ctx } = useSlider(rest);
    const context = useMemo(() => ctx, [ctx]);
    const { className = '', ...attributes } = getWrapProps();
    return (jsx(SliderProvider, { value: context, children: jsxs("div", { ...attributes, className: `${className} relative flex cursor-pointer touch-none items-center aria-disabled:cursor-not-allowed`, children: [children, jsx("input", { ...getInputProps({}, ref), type: "range", className: 'hidden' })] }) }));
});
UISlider.displayName = 'UISlider';

export { UISlider };
