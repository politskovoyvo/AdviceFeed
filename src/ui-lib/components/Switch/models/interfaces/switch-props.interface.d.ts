import { InputHTMLAttributes, ReactNode } from 'react';
import { TSwitchColor, TSwitchSize } from '../types';
export interface ISwitchProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'value'> {
    /** @default medium */
    fieldSize?: TSwitchSize;
    /** @default primary */
    color?: TSwitchColor;
    label?: ReactNode;
}
