import { jsx, jsxs } from 'react/jsx-runtime';
import { forwardRef, useCallback, memo, useMemo } from 'react';
import { useAccordionItemContext, AccordionItemProvider } from '../../blank/Accordion/accordion-context.js';
import { useAccordionItem } from '../../blank/Accordion/use-accordion.js';
import { LargeDownIcon } from '../../icons/directions/large-down.icon.js';
import { useDisclosure } from '../../utils/hooks/use-disclosure.js';
import { useUpdateEffect } from '../../utils/hooks/use-update-effect.js';
import { UIBadge } from '../Badge/Badge.js';
import '../Badge/Badge-notice.js';
import { UIPopover } from '../Popover/Popover.js';
import '../Popover/Popover-content.js';
import { UIPopoverTrigger } from '../Popover/Popover-trigger.js';
import { useNavigationContext } from './navigation-context.js';
import { NavigationItemContent } from './Navigation-item-content.js';
import { NavigationPopoverContent } from './Navigation-popover-content.js';

/**
 * Кнопка управление состоянием аккордиона
 */
const CategoryButton = forwardRef((props, ref) => {
    const { title, badges, icon } = props;
    const { expanded } = useNavigationContext();
    const { getButtonProps, isOpen } = useAccordionItemContext();
    const { onClick: onAccordionClick, ...htmlProps } = getButtonProps({}, ref);
    const handleClick = useCallback((e) => {
        if (expanded) {
            onAccordionClick?.(e);
        }
    }, [expanded, onAccordionClick]);
    return (jsx(UIPopoverTrigger, { children: jsxs("button", { ...htmlProps, onClick: handleClick, className: 'flex w-full items-center gap-2 border-b-0 border-walentine-500 px-5 py-3 text-yuri-400 transition-border hover:text-primary-900 group-has-[[aria-current="page"]]/category:border-primary-500 group-has-[[aria-current="page"]]/category:text-primary-700 aria-expanded:border-b group-aria-modal:px-3 group-aria-modal:py-2 dark:border-yuri-200 dark:text-rus-100 dark:hover:text-primary-500 dark:group-has-[[aria-current="page"]]/category:border-primary-1000 dark:group-has-[[aria-current="page"]]/category:text-primary-600', children: [jsx(NavigationItemContent, { badges: badges, icon: icon, children: title }), jsx(LargeDownIcon, { className: `${isOpen ? 'rotate-180' : ''} max-w-0 text-i-28 transition-max-width group-aria-expanded:max-w-full` })] }) }));
});
CategoryButton.displayName = 'CategoryButton';
/**
 * Контейнер аккордиона
 */
const CategoryGroup = forwardRef((props, ref) => {
    const { getContentProps } = useAccordionItemContext();
    const htmlProps = getContentProps(props, ref);
    return (jsx("div", { ...htmlProps, className: "flex flex-col gap-1 overflow-hidden transition-all aria-expanded:py-2 group-aria-modal:aria-expanded:py-1.5" }));
});
CategoryGroup.displayName = 'CategoryGroup';
/**
 *  UI элемент
 */
const UINavigationCategory = memo((props) => {
    const { className = '', title, icon, children, badges, ...rest } = props;
    const { expanded, isModal } = useNavigationContext();
    const { htmlProps, ...ctx } = useAccordionItem(rest);
    const context = useMemo(() => ctx, [ctx]);
    const { isOpen, open, close } = useDisclosure();
    const handleOpen = useCallback(() => {
        if (!expanded) {
            open();
        }
    }, [expanded, open]);
    useUpdateEffect(() => {
        if (!expanded || isModal) {
            close();
        }
    }, [expanded, isModal]);
    return (jsx(AccordionItemProvider, { value: context, children: jsx(UIPopover, { trigger: "hover", placement: "right", isOpen: isOpen, close: close, open: handleOpen, children: jsxs("div", { className: "relative", children: [jsxs("div", { "aria-expanded": context.isOpen, className: `${className} group/category relative mx-3 overflow-hidden rounded-4xl border border-transparent transition-all has-[[aria-current="page"]]:border-primary-500 aria-expanded:border-walentine-500 has-[[aria-current="page"]]:aria-expanded:border-primary-500 dark:has-[[aria-current="page"]]:border-primary-1000 dark:aria-expanded:border-yuri-200 dark:has-[[aria-current="page"]]:aria-expanded:border-primary-1000`, ...htmlProps, children: [jsx(CategoryButton, { title: title, icon: icon, badges: badges }), jsx(CategoryGroup, { ...rest, children: children }), jsx(NavigationPopoverContent, { title: title, badges: badges, children: children })] }), !!badges?.length && (jsx("div", { className: "absolute right-3 top-0 flex items-center -space-x-1 opacity-100 transition-opacity group-aria-expanded:opacity-0", children: badges.map((b, i) => (jsx(UIBadge, { className: "border-2 border-walentine-100 dark:border-yuri-400", theme: "solid", color: b.color, shape: "circle", fieldSize: 'notice' }, i))) }))] }) }) }));
});
UINavigationCategory.displayName = 'UINavigationCategory';

export { UINavigationCategory };
