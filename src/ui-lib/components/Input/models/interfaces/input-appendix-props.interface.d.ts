import { ReactNode } from 'react';
import { TInputSize, TInputTheme } from '../types';
export interface IInputAppendixProps {
    position: TInputAppendixPosition;
    fieldSize: TInputSize;
    theme: TInputTheme;
    content: TInputAppendix;
    disabled?: boolean;
}
export type TInputAppendixPosition = 'left' | 'right';
export type TInputAppendix = ReactNode | IInputAppendix;
export interface IInputAppendix {
    label: string;
    onClick: () => void;
    disabled?: boolean;
}
