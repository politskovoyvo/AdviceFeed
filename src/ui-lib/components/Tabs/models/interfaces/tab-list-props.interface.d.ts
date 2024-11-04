import { HTMLAttributes } from 'react';
import { IUseTabListProps } from './use-tabs-list-props.interface';
export interface ITabListProps extends IUseTabListProps, Omit<HTMLAttributes<HTMLDivElement>, 'onKeyDown' | 'ref'> {
}
