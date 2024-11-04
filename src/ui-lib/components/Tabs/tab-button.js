import { jsxs, Fragment, jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';
import { useTab } from './use-tabs.js';

const UITabButton = forwardRef((props, ref) => {
    const { className = '', children, icon, isDisabled, isSelected, isShowLeftDivider, index, ...tabProps } = useTab({ ...props, ref });
    const extraClasses = `${isSelected ? 'opacity-100' : 'opacity-80'} ${className}`;
    const dividerClasses = `h-4 w-0.25 rounded-lg border-0 bg-rus-300 dark:bg-yuri-300 duration-200 transition-opacity
  ${isShowLeftDivider ? 'opacity-100' : 'opacity-0'}`;
    return (jsxs(Fragment, { children: [index !== 0 && jsx("hr", { className: dividerClasses }), jsxs("button", { ...tabProps, className: `z-10 flex h-8 flex-1 items-center justify-center gap-0.25 whitespace-nowrap bg-transparent p-1.25 text-sm font-normal text-yuri-400 disabled:cursor-not-allowed disabled:text-rus-200 dark:text-walentine-100 ${extraClasses}`, children: [icon && jsx("div", { className: 'text-i-20', children: icon }), jsx("span", { className: `${icon ? 'hidden md:block' : 'block'}`, children: children })] })] }));
});
UITabButton.displayName = 'UITabButton';

export { UITabButton };
