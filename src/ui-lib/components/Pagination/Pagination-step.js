import { jsxs, jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';
import { DoubleDownIcon } from '../../icons/directions/double-down.icon.js';
import { StepDirection } from './tailwind-variations/step-direction.js';

const PaginationStep = forwardRef((props, ref) => {
    const { children, ...rest } = props;
    const isNavigation = typeof children === 'string';
    const buttonClasses = isNavigation
        ? 'text-rus-300 active:bg-walentine-400'
        : 'text-yuri-400 hover:bg-walentine-400 active:bg-walentine-500';
    return (jsxs("button", { ref: ref, ...rest, className: `${buttonClasses} group relative flex size-10 items-center justify-center rounded-lg bg-transparent text-base aria-selected:bg-rus-100`, children: [isNavigation && (jsx(DoubleDownIcon, { className: `${StepDirection[children]} absolute text-i-20 text-yuri-400 opacity-0 transition-opacity group-hover:opacity-100` })), jsx("span", { className: isNavigation ? 'opacity-100 transition-opacity group-hover:opacity-0' : '', children: isNavigation ? '...' : children })] }));
});
PaginationStep.displayName = 'PaginationStep';

export { PaginationStep };
