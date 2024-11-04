import { jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';
import { useTabList, useTabIndicator } from './use-tabs.js';

const UITabList = forwardRef(({ className = '', ...rest }, ref) => {
    const { children, ...props } = useTabList({ ...rest, ref });
    const indicatorStyle = useTabIndicator();
    const indicatorClassName = "after:content-[''] after:ease-[cubic-bezier(0, 0, 0.2, 1)] after:w-[var(--width)] after:left-[var(--left)] after:absolute after:-bottom-0 after:h-0.5 after:rounded-full after:bg-primary-700 after:transition-all after:duration-200";
    return (jsx("div", { className: `w-full overflow-x-hidden ${className}`, ...props, children: jsx("div", { style: indicatorStyle, className: `${indicatorClassName} scrollbar-hidden relative flex w-full gap-8 overflow-x-auto border-b border-walentine-500 px-4 dark:border-rus-300 md:px-0`, children: children }) }));
});
UITabList.displayName = 'UITabList';

export { UITabList };
