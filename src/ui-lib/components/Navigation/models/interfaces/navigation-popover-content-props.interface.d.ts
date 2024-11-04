import { ReactNode } from 'react';
import { IBadgeProps } from '../../../Badge/models';
export interface INavigationPopoverContentProps {
    title?: ReactNode;
    badges?: Omit<IBadgeProps, 'fieldSize' | 'shape'>[];
    children?: ReactNode;
}
