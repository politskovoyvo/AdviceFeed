import { jsxs, Fragment, jsx } from 'react/jsx-runtime';
import { createElement } from 'react';
import { EmptyIcon } from '../../icons/data/empty.icon.js';
import { UIBadge } from '../Badge/Badge.js';
import '../Badge/Badge-notice.js';
import { useNavigationContext } from './navigation-context.js';

const NavigationItemContent = (props) => {
    const { icon = EmptyIcon, children, badges = [], minimalize = false } = props;
    const { isModal } = useNavigationContext();
    const size = isModal || minimalize ? 'medium' : 'large';
    return (jsxs(Fragment, { children: [jsxs("div", { className: "flex items-center group-aria-expanded:space-x-2", children: [jsx("span", { className: `${minimalize ? 'text-i-24' : 'text-i-28'} group-aria-expanded:left-0 group-aria-expanded:translate-x-0 group-aria-modal:text-i-24`, children: createElement(icon) }), jsx("span", { className: 'max-w-0 overflow-hidden text-nowrap text-base font-normal opacity-0 transition-max-width transition-opacity group-aria-expanded:max-w-full group-aria-expanded:opacity-100', children: children })] }), jsx("div", { className: "ml-auto flex max-w-0 items-center overflow-hidden transition-all group-aria-expanded:max-w-full group-aria-expanded:space-x-2", children: badges.map((b, i) => (jsx(UIBadge, { ...b, shape: "circle", fieldSize: size, className: "shrink-0 text-nowrap transition-all" }, i))) })] }));
};

export { NavigationItemContent };
