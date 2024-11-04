import { HTMLInputTypeAttribute, InputHTMLAttributes, Ref } from 'react';
import { TInputSize, TInputTheme } from '../types';
import { TInputAppendix } from './input-appendix-props.interface';
export interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
    fieldPrefix?: TInputAppendix;
    fieldPostfix?: TInputAppendix;
    type?: HTMLInputTypeAttribute;
    /** Название поля ввода даты */
    label?: string;
    errors?: any;
    invalid?: boolean;
    /** Тема
     * @default deafult */
    theme?: TInputTheme;
    loading?: boolean;
    loadingProgress?: number;
    /** Размер поля ввода даты
     * @default medium */
    fieldSize?: TInputSize;
    inputClassName?: string;
    labelClassName?: string;
    labelRef?: Ref<any>;
}
