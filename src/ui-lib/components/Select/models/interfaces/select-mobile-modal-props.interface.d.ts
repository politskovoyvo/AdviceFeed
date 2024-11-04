import { TSelectLabelProps } from '../types';
import { ISelectDropdownProps } from './select-dropdown-props.interface';
export interface ISelectMobileModalProps extends Required<Pick<ISelectDropdownProps, 'fieldSize'>>, Pick<ISelectDropdownProps, 'optionTemplate' | 'dropdownTitle'>, TSelectLabelProps {
    placeholder?: string;
}
