import { jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';
import { useTabList, useTabIndicator } from './use-tabs.js';

const UITabButtonList = forwardRef(({ className = '', ...rest }, ref) => {
    const { children, ...props } = useTabList({ ...rest, ref });
    const indicatorStyle = useTabIndicator();
    const indicatorClassName = "after:content-[''] after:ease-[cubic-bezier(0, 0, 0.2, 1)] after:absolute after:w-[var(--width)] after:left-[var(--left)] after:top-[var(--top)] after:h-[var(--height)] after:rounded-lg after:bg-walentine-100 dark:after:bg-yuri-300 after:transition-all after:duration-200";
    return (jsx("div", { className: `w-full overflow-x-hidden ${className}`, ...props, children: jsx("div", { style: indicatorStyle, className: `${indicatorClassName} scrollbar-hidden relative flex w-full items-center overflow-x-auto rounded-lg bg-walentine-500 p-0.5 dark:bg-yuri-100`, children: children }) }));
});
UITabButtonList.displayName = 'UITabButtonList';

export { UITabButtonList };
