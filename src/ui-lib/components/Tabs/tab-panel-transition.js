import { jsx } from 'react/jsx-runtime';
import { Transition } from '@headlessui/react';
import { forwardRef } from 'react';

const UITabPanelTransition = forwardRef(({ children, show }, ref) => {
    return (jsx(Transition, { show: show, children: jsx("div", { ref: ref, className: "opacity-100 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-75 data-[leave]:duration-150", children: children }) }));
});
UITabPanelTransition.displayName = 'UITabPanelTransition';

export { UITabPanelTransition };
