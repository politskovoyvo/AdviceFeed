import { ReactNode } from 'react';
import { TRadioSize, TRadioTheme, TRadioValue } from '../types';
export interface IRadioProps {
    children?: ReactNode;
    fieldSize?: TRadioSize;
    theme?: TRadioTheme;
    disabled?: boolean;
    value?: TRadioValue;
    id?: string;
    className?: string;
}
