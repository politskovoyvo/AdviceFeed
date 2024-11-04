import { jsx } from 'react/jsx-runtime';
import { forwardRef, useMemo } from 'react';
import { AccordionItemProvider } from '../../blank/Accordion/accordion-context.js';
import { useAccordionItem } from '../../blank/Accordion/use-accordion.js';
import { runIfFn } from '../../utils/methods/run-if-fn.js';

const UIAccordionItem = forwardRef((props, ref) => {
    const { children, className = '', ...rest } = props;
    const { htmlProps, ...ctx } = useAccordionItem(rest);
    const context = useMemo(() => ctx, [ctx]);
    return (jsx(AccordionItemProvider, { value: context, children: jsx("div", { className: `${className} w-full`, ...htmlProps, ref: ref, children: runIfFn(children, { isDisabled: ctx.disabled, isExpanded: ctx.isOpen }) }) }));
});
UIAccordionItem.displayName = 'UIAccordionItem';

export { UIAccordionItem };
