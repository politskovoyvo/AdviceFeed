import { IMenuItemProps } from './menu-item-props.interface';
import { IUseMenuOptionOptions } from './use-menu-option-options.interface';
export interface IMenuItemOptionProps extends IUseMenuOptionOptions, Omit<IMenuItemProps, keyof IUseMenuOptionOptions> {
}
