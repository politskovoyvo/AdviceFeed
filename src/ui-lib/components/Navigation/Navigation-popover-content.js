import { jsx, jsxs } from 'react/jsx-runtime';
import { memo } from 'react';
import { callAllHandlers } from '../../utils/methods/call-all-handlers.js';
import { getValidChildren } from '../../utils/methods/valid-children.js';
import { UIBadge } from '../Badge/Badge.js';
import '../Badge/Badge-notice.js';
import '../Link/Link.js';
import { UILinkNavigation } from '../Link/Link-navigation.js';
import { usePopoverContext } from '../Popover/Popover-context.js';
import '@popperjs/core/lib/modifiers/eventListeners';
import '@popperjs/core/lib/modifiers/flip';
import '@popperjs/core/lib/modifiers/offset';
import '@popperjs/core/lib/modifiers/preventOverflow';
import '@popperjs/core/lib/popper-lite';
import '../Popover/models/enums/popover-trigger.enum.js';
import { UIPopoverContent } from '../Popover/Popover-content.js';
import { UIPortal } from '../Portal/Portal.js';
import { NavigationPopoverProvider } from './Navigation-provider.js';

const NavigationPopoverContent = memo((props) => {
    const { title, badges, children } = props;
    const { close } = usePopoverContext();
    const validChildren = getValidChildren(children);
    const className = 'rounded-full w-full flex items-center bg-transparent px-4 py-1.5 text-yuri-400 dark:text-rus-100 hover:text-primary-900 dark:hover:text-primary-500 aria-current:text-primary-700 dark:aria-current:text-primary-600';
    return (jsx(UIPortal, { children: jsxs(UIPopoverContent, { className: "flex flex-col gap-2 rounded-lg bg-walentine-100 px-3 py-2 shadow-black-around dark:bg-yuri-300", custom: true, children: [title && jsx("span", { className: "font-basefont-semibold text-yuri-400 dark:text-rus-300", children: title }), !!badges?.length && (jsx("div", { className: "flex items-center space-x-1", children: badges.map((b, i) => (jsx(UIBadge, { ...b, shape: "circle", fieldSize: 'medium', className: "shrink-0 text-nowrap" }, i))) })), !!validChildren.length && (jsx("ul", { className: "flex flex-col gap-1.5", children: jsx(NavigationPopoverProvider, { value: true, children: validChildren.map((c, i) => (jsx("li", { children: c.props.to ? (jsx(UILinkNavigation, { onClick: callAllHandlers(c.props.onClick, close), to: c.props.to, className: className, children: c.props.children })) : (jsx("button", { type: "button", onClick: callAllHandlers(c.props.onClick?.(c.props.value), close), className: className, children: c.props.children })) }, i))) }) }))] }) }));
});
NavigationPopoverContent.displayName = 'NavigationPopoverContent';

export { NavigationPopoverContent };
