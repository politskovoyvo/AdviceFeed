import { jsxs, jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';
import { useAccordionItemContext } from '../../blank/Accordion/accordion-context.js';
import { DownIcon } from '../../icons/directions/down.icon.js';

const UIAccordionButton = forwardRef((props, ref) => {
    const { showDirection = true, className = '', title, description, ...rest } = props;
    const { getButtonProps, isOpen } = useAccordionItemContext();
    const { children, ...htmlProps } = getButtonProps(rest, ref);
    const defaultTemplate = (jsxs("div", { className: 'flex flex-col text-left text-base font-normal', children: [title && jsx("h3", { className: 'text-sm text-rus-600 md:text-base', children: title }), description && (jsx("span", { className: `${isOpen ? 'text-primary-700' : 'text-yuri-400 dark:text-walentine-100'} transition-all`, children: description }))] }));
    return (jsxs("button", { className: `flex w-full items-center justify-between gap-4 py-3 hover:bg-walentine-200 dark:hover:bg-yuri-300 ${className}`, ...htmlProps, children: [(title || description) && defaultTemplate, children, showDirection && (jsx(DownIcon, { className: `text-i-24 transition-all ${isOpen ? 'rotate-180 text-yuri-400 dark:text-walentine-100' : 'rotate-0 text-rus-600'}` }))] }));
});
UIAccordionButton.displayName = 'UIAccordionButton';

export { UIAccordionButton };
