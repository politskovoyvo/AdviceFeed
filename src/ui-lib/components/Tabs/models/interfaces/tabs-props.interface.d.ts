import { HTMLAttributes, ReactNode } from 'react';
import { IUseTabsProps } from './use-tabs-props.interface';
export interface ITabsProps extends IUseTabsProps, Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> {
    children: ReactNode;
}
