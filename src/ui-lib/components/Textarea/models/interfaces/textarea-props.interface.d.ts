import { TextareaHTMLAttributes } from 'react';
import { IInputProps } from '../../../Input';
export interface ITextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement>, Pick<IInputProps, 'theme' | 'fieldSize'> {
    maxRows?: number;
    preventEnter?: boolean;
}
