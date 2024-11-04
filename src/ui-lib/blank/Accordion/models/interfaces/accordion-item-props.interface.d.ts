import { HTMLAttributes, ReactNode } from 'react';
import { IUseAccordionItemProps } from './use-accordion-item-props.interface';
export interface IAccordionItemProps extends Omit<HTMLAttributes<HTMLDivElement>, 'children'>, IUseAccordionItemProps {
    /** &nbsp; */
    children?: ReactNode | ((props: {
        isExpanded: boolean;
        isDisabled: boolean;
    }) => ReactNode);
}
