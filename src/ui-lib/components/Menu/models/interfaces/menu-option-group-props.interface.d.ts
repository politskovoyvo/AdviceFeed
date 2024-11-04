import { IMenuGroupProps } from './menu-group-props.interface';
import { IUseMenuOptionGroupProps } from './use-menu-option-group-props.interface';
export interface IMenuOptionGroupProps extends IUseMenuOptionGroupProps, Omit<IMenuGroupProps, 'defaultValue' | 'onChange' | 'value'> {
}
