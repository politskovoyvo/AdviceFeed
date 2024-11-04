import { jsx } from 'react/jsx-runtime';
import { Transition } from '@headlessui/react';
import { forwardRef } from 'react';
import { useTooltipContext } from './Tooltip-context.js';

const TooltipComponent = forwardRef((props, ref) => {
    const { children, className, noneStyles } = props;
    const classNames = noneStyles ? '' : 'select-none pointer-events-none rounded-lg bg-yuri-400 px-4 py-3 text-sm text-walentine-100';
    const { getTooltipPositionerProps, getTooltipProps, getTransitionProps } = useTooltipContext();
    return (jsx("div", { ...getTooltipPositionerProps(), children: jsx(Transition, { ...getTransitionProps(), children: jsx("div", { ref: ref, ...getTooltipProps({ className: `${classNames} ${className}` }), children: children }) }) }));
});
TooltipComponent.displayName = 'TooltipComponent';

export { TooltipComponent };
