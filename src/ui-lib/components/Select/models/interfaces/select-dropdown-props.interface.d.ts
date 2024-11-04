import { CSSProperties, FC } from 'react';
import { ISelectCommonProps } from './select-common-props.interface';
import { ISelectOption } from './select-option.interface';
export interface ISelectDropdownProps extends Required<Pick<ISelectCommonProps, 'fieldSize'>> {
    optionTemplate?: FC<ISelectOption>;
    dropdownTitle?: string;
    maxOptionsOverflow: number;
    resetButton: boolean;
    innerStyle: CSSProperties;
    className?: string;
}
