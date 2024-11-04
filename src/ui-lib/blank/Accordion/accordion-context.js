import { createDescendantContext } from '../../components/Descendants/use-descendant.js';
import { createContext } from '../../utils/hooks/context.js';

const [AccordionProvider, useAccordionContext] = createContext({
    providerName: 'AccordionProvider',
    hookName: 'useAccordionContext'
});
const [AccordionItemProvider, useAccordionItemContext] = createContext({
    providerName: 'AccordionItemProvider',
    hookName: 'useAccordionItemContext',
    required: false
});
const [AccordionDescendantsProvider, useAccordionDescendantsContext, useAccordionDescendants, useAccordionDescendant] = createDescendantContext();

export { AccordionDescendantsProvider, AccordionItemProvider, AccordionProvider, useAccordionContext, useAccordionDescendant, useAccordionDescendants, useAccordionDescendantsContext, useAccordionItemContext };
