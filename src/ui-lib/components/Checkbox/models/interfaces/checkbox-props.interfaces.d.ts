import { InputHTMLAttributes, ReactNode } from 'react';
import { CheckboxThemesType, TCheckboxShape, TCheckboxSizes } from '../types';
export interface ICheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
    children?: ReactNode;
    label?: string;
    /** @default false */
    indeterminate?: boolean;
    /** @default medium */
    fieldSize?: TCheckboxSizes;
    /** @default primary */
    theme?: CheckboxThemesType;
    /** @default square */
    shape?: TCheckboxShape;
}
