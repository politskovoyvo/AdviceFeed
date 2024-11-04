import { jsxs, jsx } from 'react/jsx-runtime';
import { memo, useCallback } from 'react';
import { useAccordionItemContext } from '../../blank/Accordion/accordion-context.js';
import { useDisclosure } from '../../utils/hooks/use-disclosure.js';
import { useUpdateEffect } from '../../utils/hooks/use-update-effect.js';
import { UIBadge } from '../Badge/Badge.js';
import '../Badge/Badge-notice.js';
import '../Link/Link.js';
import { UILinkNavigation } from '../Link/Link-navigation.js';
import { UIPopover } from '../Popover/Popover.js';
import '../Popover/Popover-content.js';
import { UIPopoverTrigger } from '../Popover/Popover-trigger.js';
import { useNavigationContext } from './navigation-context.js';
import { NavigationItemContent } from './Navigation-item-content.js';
import { NavigationPopoverContent } from './Navigation-popover-content.js';
import { useNavigationPopoverContext } from './Navigation-provider.js';
import { ItemView } from './tailwind-variations/item-view.js';
import { useNavigation } from './use-navigation.js';

const UINavigationItem = memo((props) => {
    const { to, onClick, value, badges, children, ...contentProps } = props;
    const { close } = useNavigation();
    const { expanded, isModal } = useNavigationContext();
    const accordionItemContext = useAccordionItemContext();
    const popoverContext = useNavigationPopoverContext();
    const isPartOfCategory = !!accordionItemContext && !popoverContext;
    const viewType = isPartOfCategory ? 'minimal' : 'detailized';
    const className = 'px-3 group block w-full text-yuri-400 dark:text-rus-100 hover:text-primary-900 dark:hover:text-primary-500 aria-current:text-primary-700 dark:aria-current:text-primary-600';
    const { isOpen, open, close: closePopover } = useDisclosure();
    const handleOpen = useCallback(() => {
        if (!expanded) {
            open();
        }
    }, [expanded, open]);
    useUpdateEffect(() => {
        if (!expanded || isModal) {
            closePopover();
        }
    }, [expanded, isModal]);
    const content = (jsxs("div", { className: `${ItemView[viewType]} relative flex justify-between rounded-full border border-transparent`, children: [jsx(NavigationItemContent, { ...contentProps, badges: badges, minimalize: isPartOfCategory, children: children }), !!badges?.length && (jsx("div", { className: "absolute right-0 top-0 flex items-center -space-x-1 opacity-100 transition-opacity group-aria-expanded:opacity-0", children: badges.map((b, i) => (jsx(UIBadge, { className: "border-2 border-walentine-100 dark:border-yuri-400", theme: "solid", color: b.color, shape: "circle", fieldSize: 'notice' }, i))) }))] }));
    const handleClick = () => {
        close();
        onClick?.(value);
    };
    return (jsx("li", { children: jsxs(UIPopover, { trigger: "hover", placement: "right", isOpen: isOpen, close: closePopover, open: handleOpen, children: [jsx(UIPopoverTrigger, { children: to ? (jsx(UILinkNavigation, { onClick: close, to: to, className: className, children: content })) : (jsx("button", { type: "button", onClick: handleClick, className: className, children: content })) }), jsx(NavigationPopoverContent, { title: children, badges: badges })] }) }));
});
UINavigationItem.displayName = 'UINavigationItem';

export { UINavigationItem };
