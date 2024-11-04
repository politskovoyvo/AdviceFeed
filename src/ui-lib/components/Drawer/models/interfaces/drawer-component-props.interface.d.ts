import { HTMLAttributes, ReactNode } from 'react';
import { IDrawerProps } from './drawer-props.interface';
export interface IDrawerComponentProps extends Pick<IDrawerProps, 'className' | 'noneStyles' | 'position'>, Pick<HTMLAttributes<HTMLDivElement>, 'style'> {
    children?: ReactNode;
}
