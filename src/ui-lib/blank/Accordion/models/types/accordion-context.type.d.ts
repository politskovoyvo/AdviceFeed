import { TUseAccordionReturn } from '../../use-accordion';
export type TAccordionContext = Omit<TUseAccordionReturn, 'descendants' | 'htmlProps'>;
