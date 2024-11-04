import { jsxs, jsx } from 'react/jsx-runtime';
import { Transition } from '@headlessui/react';
import { forwardRef } from 'react';
import { UIBadge } from './Badge.js';

const UIBadgeNotice = forwardRef((props, ref) => {
    const { children, count, theme = 'default', color, className = '', ...rest } = props;
    return (jsxs("div", { ref: ref, className: `relative w-fit ${className}`, children: [children, jsx("div", { className: 'absolute right-0 top-0 -translate-y-1/2 translate-x-1/2 whitespace-nowrap', children: jsx(Transition, { appear: true, show: count !== undefined, children: jsx("div", { className: `
              scale-100 opacity-100 transition-all duration-150 ease-in
              data-[closed]:scale-0 data-[closed]:opacity-50
            `, children: jsx(UIBadge, { fieldSize: 'notice', shape: 'circle', theme: theme, color: color, ...rest, children: count }) }) }) })] }));
});
UIBadgeNotice.displayName = 'UIBadgeNotice';

export { UIBadgeNotice };
