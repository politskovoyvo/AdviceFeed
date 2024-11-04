import { jsxs, jsx } from 'react/jsx-runtime';
import { Transition } from '@headlessui/react';
import { memo } from 'react';
import { UIBlankAccordion } from '../../blank/Accordion/Accordion.js';
import { MediaScreens } from '../../utils/consts/media-screens.js';
import { useMediaQuery } from '../../utils/hooks/use-media-query.js';
import { NavigationContextProvider } from './navigation-context.js';
import { useNavigationContext } from './Navigation-provider.js';
import { useNavigation } from './use-navigation.js';

const UINavigation = memo((props) => {
    const { children, className = '', blockBreakPoint = MediaScreens.md } = props;
    const { options, visible, expanded } = useNavigationContext();
    const { close, opened, changeOpenedCategories } = useNavigation();
    const [isMediaMatch] = useMediaQuery(blockBreakPoint);
    const { overlayClassName } = options;
    const context = { expanded: !isMediaMatch || expanded, isModal: !isMediaMatch };
    return (jsxs(NavigationContextProvider, { value: context, children: [jsx(Transition, { show: !isMediaMatch && visible, children: jsx("div", { onClick: () => close(), className: `
            fixed bottom-0 left-0 right-0 top-0 z-10 opacity-100 transition-opacity duration-150 ease-in data-[closed]:opacity-0
            ${overlayClassName ? overlayClassName : 'bg-yuri-1000/50'}` }) }), jsx(Transition, { show: isMediaMatch || visible, children: jsx("nav", { "aria-expanded": !isMediaMatch || expanded, "aria-modal": !isMediaMatch, className: `
            ${className} group relative grid h-full w-fit translate-x-0 grid-cols-0 overflow-hidden overflow-y-auto overflow-x-hidden bg-walentine-100 py-6 transition-grid-template-columns transition-transform duration-150 aria-expanded:grid-cols-1fr aria-modal:fixed aria-modal:bottom-0 aria-modal:left-0 aria-modal:top-0
            aria-modal:z-20 data-[closed]:-translate-x-full data-[enter]:ease-in data-[leave]:ease-out
            dark:bg-yuri-400 dark:shadow-rus-500
            `, children: jsx(UIBlankAccordion, { className: "min-w-23", indexes: expanded || !isMediaMatch ? opened : [], onChange: changeOpenedCategories, children: jsx("ul", { className: 'overflow-y-auto overflow-x-hidden', children: children }) }) }) })] }));
});
UINavigation.displayName = 'UINavigation';

export { UINavigation };
