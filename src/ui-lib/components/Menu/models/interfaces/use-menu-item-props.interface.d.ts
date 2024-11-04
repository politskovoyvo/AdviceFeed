import { ButtonHTMLAttributes, HTMLAttributes } from 'react';
export interface IUseMenuItemProps extends Omit<HTMLAttributes<Element>, 'color' | 'disabled'> {
    /** @default false */
    isDisabled?: boolean;
    /** Если false, то смотрится глобальное у UIMenu
     * @default false */
    closeOnSelect?: boolean;
    type?: ButtonHTMLAttributes<HTMLButtonElement>['type'];
}
