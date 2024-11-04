import { HTMLAttributes } from 'react';
import { IUseAccordionProps } from './use-accordion-props.interface';
export interface IAccordionProps extends IUseAccordionProps, Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> {
}
