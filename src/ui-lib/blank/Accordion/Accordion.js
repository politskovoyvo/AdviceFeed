import { jsx } from 'react/jsx-runtime';
import { forwardRef, useMemo } from 'react';
import { AccordionDescendantsProvider, AccordionProvider } from './accordion-context.js';
import { useAccordion } from './use-accordion.js';

const UIBlankAccordion = forwardRef((props, ref) => {
    const { htmlProps, descendants, ...ctx } = useAccordion(props);
    const context = useMemo(() => ctx, [ctx]);
    return (jsx(AccordionDescendantsProvider, { value: descendants, children: jsx(AccordionProvider, { value: context, children: jsx("div", { ref: ref, ...htmlProps }) }) }));
});
UIBlankAccordion.displayName = 'UIBlankAccordion';

export { UIBlankAccordion };
