import { FC, ReactNode } from 'react';
import { IBadgeProps } from '../../../Badge/models';
export interface INavigationItemContentProps {
    children?: ReactNode;
    icon?: FC;
    minimalize?: boolean;
    badges?: Omit<IBadgeProps, 'fieldSize' | 'shape'>[];
}
