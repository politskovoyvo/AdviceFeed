import { ReactNode } from 'react';
import { ITabProps } from './tab-props.interface';
export interface ITabButtonProps extends Omit<ITabProps, 'count'> {
    icon?: ReactNode;
}
