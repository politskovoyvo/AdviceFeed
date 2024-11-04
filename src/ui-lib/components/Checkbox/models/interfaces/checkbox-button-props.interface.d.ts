import { ReactNode } from 'react';
import { TCheckboxButtonThemes, TCheckboxButtonView } from '../types';
import { ICheckboxProps } from './checkbox-props.interfaces';
interface ICheckboxButtonParams {
    checked: boolean;
    disabled?: boolean;
}
export interface ICheckboxButtonProps extends Omit<ICheckboxProps, 'children' | 'label' | 'theme'> {
    /** @default default */
    view?: TCheckboxButtonView;
    /** @default default */
    theme?: TCheckboxButtonThemes;
    /** &nbsp; */
    children?: ReactNode | ((params: ICheckboxButtonParams) => ReactNode);
}
export {};
