import { jsx, jsxs } from 'react/jsx-runtime';
import { forwardRef } from 'react';
import { useMenuItem } from './use-menu.js';

const UIMenuItem = forwardRef((props, ref) => {
    const { icon, children, ...rest } = props;
    const { className = '', ...menuitemProps } = useMenuItem(rest, ref);
    return (jsx("button", { className: `group flex w-full px-1 ${className}`, ...menuitemProps, children: jsxs("div", { className: 'flex w-full items-center gap-2 rounded-2 px-3 py-2 group-hover:bg-walentine-400 dark:group-hover:bg-yuri-200', children: [jsx("span", { className: 'w-full text-left text-sm font-normal', children: children }), icon && jsx("span", { children: icon })] }) }));
});
UIMenuItem.displayName = 'UIMenuItem';

export { UIMenuItem };
