import { jsxs, jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';
import '../Link/Link.js';
import { UILinkNavigation } from '../Link/Link-navigation.js';
import { UIThemeSwitch } from '../Theme-switch/Theme-switch.js';
import { useNavigation } from './use-navigation.js';

const UINavigationHeader = forwardRef((props, ref) => {
    const { description, title, icon, to = '/' } = props;
    const { close } = useNavigation();
    return (jsxs("div", { className: 'mb-6 flex items-center justify-between px-6.5 transition-all group-aria-expanded:space-x-6 group-aria-expanded:px-8', children: [jsxs("div", { className: 'flex items-center group-aria-expanded:space-x-3', children: [jsx(UILinkNavigation, { onClick: close, to: to, children: jsx("img", { decoding: "async", className: 'h-10 w-10 min-w-10 transition-all', src: icon, alt: title }) }), jsxs("div", { className: 'flex w-0 flex-col overflow-hidden text-nowrap text-yuri-400 opacity-0 transition-all group-aria-expanded:w-auto group-aria-expanded:opacity-100 dark:text-walentine-400', children: [jsx("span", { className: 'text-xl font-bold', children: title }), description && jsx("span", { className: 'text-xs', children: description })] })] }), jsx(UIThemeSwitch, { className: "h-8 w-0 group-aria-expanded:w-auto" })] }));
});
UINavigationHeader.displayName = 'UINavigationHeader';

export { UINavigationHeader };
