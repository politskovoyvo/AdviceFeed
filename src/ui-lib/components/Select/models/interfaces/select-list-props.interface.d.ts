import { ISelectCommonProps } from './select-common-props.interface';
import { ISelectDropdownProps } from './select-dropdown-props.interface';
export interface ISelectListProps extends Required<Pick<ISelectCommonProps, 'fieldSize'>>, Omit<ISelectDropdownProps, 'resetButton' | 'innerStyle'> {
}
