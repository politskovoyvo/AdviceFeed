import { ButtonHTMLAttributes, ReactElement } from 'react';
import { IUseMenuItemProps } from './use-menu-item-props.interface';
export interface IMenuItemOptions extends Pick<IUseMenuItemProps, 'isDisabled' | 'closeOnSelect'> {
    icon?: ReactElement;
}
export interface IMenuItemProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'disabled' | 'aria-disabled'>, IMenuItemOptions {
}
