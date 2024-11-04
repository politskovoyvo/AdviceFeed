import { jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';
import { UIBlankAccordion } from '../../blank/Accordion/Accordion.js';

const UIAccordion = forwardRef((props, ref) => {
    const { className = '', ...rest } = props;
    return jsx(UIBlankAccordion, { ref: ref, className: `divide-y divide-rus-600 ${className}`, ...rest });
});
UIAccordion.displayName = 'UIAccordion';

export { UIAccordion };
