import { ReactNode } from 'react';
import { IUseMenuProps } from './use-menu-props.interface';
export interface IMenuProps extends IUseMenuProps {
    children?: ReactNode;
}
