import { jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';
import { useAccordionItemContext } from '../../blank/Accordion/accordion-context.js';

const UIAccordionContent = forwardRef((props, ref) => {
    const { getContentProps } = useAccordionItemContext();
    const { className = '', ...rest } = getContentProps(props, ref);
    return jsx("div", { className: `${className} overflow-hidden transition-all duration-300`, ...rest });
});
UIAccordionContent.displayName = 'UIAccordionContent';

export { UIAccordionContent };
