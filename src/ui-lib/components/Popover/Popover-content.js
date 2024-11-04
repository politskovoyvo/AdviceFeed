import { jsx } from 'react/jsx-runtime';
import { Transition } from '@headlessui/react';
import { forwardRef } from 'react';
import { usePopoverContext } from './Popover-context.js';

const UIPopoverContent = forwardRef((props, ref) => {
    const { custom = false, className = '', ...rest } = props;
    const wrapClassName = custom ? '' : 'rounded-xl py-4 px-5 shadow-black-around bg-walentine-100 dark:bg-yuri-100';
    const { getPopoverProps, getPopoverPositionerProps, getTransitionProps } = usePopoverContext();
    return (jsx("div", { ...getPopoverPositionerProps(), children: jsx(Transition, { ...getTransitionProps(), children: jsx("div", { ...getPopoverProps({ ...rest, className: `relative ${wrapClassName} ${className}` }, ref) }) }) }));
});
UIPopoverContent.displayName = 'UIPopoverContent';

export { UIPopoverContent };
