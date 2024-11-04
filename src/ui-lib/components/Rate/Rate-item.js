import { jsx, jsxs } from 'react/jsx-runtime';
import { forwardRef } from 'react';
import { StarIcon } from '../../icons/application/star.icon.js';
import { useRateContext } from './rate-context.js';
import { RateSize } from './tailwind-variations/size.js';
import { useRateItem } from './use-rate.js';

const RateItem = forwardRef((props, ref) => {
    const { value } = props;
    const { symbol = jsx(StarIcon, {}), disabled, half, decimal, fieldSize, selectRate, handleMouseMove, handleMouseEnter, handleMouseLeave } = useRateContext();
    const { width } = useRateItem({ value });
    const sizeClassName = `${RateSize[fieldSize]}`;
    return (jsxs("button", { className: `relative border-0 bg-transparent outline-none transition-all enabled:hover:scale-110 ${sizeClassName}`, ref: ref, type: "button", onMouseEnter: (e) => handleMouseEnter(e, value), onMouseLeave: handleMouseLeave, onMouseMove: (e) => handleMouseMove(e, value), onClick: () => selectRate(value), children: [jsx("div", { style: { width: `${width}%` }, className: 'pointer-events-none absolute bottom-0 left-0 right-0 top-0 overflow-hidden text-primary-700', children: symbol }), jsx("div", { className: 'pointer-events-none text-rus-400', children: symbol })] }));
});
RateItem.displayName = 'UIRateItem';

export { RateItem };
