import { ReactNode } from 'react';
import { TRadioValue } from '../types';
export interface IRadioGroup {
    children: ReactNode;
    name?: string;
    onChange?(value: string | number): void;
    defaultValue?: string | number;
    value?: TRadioValue | null;
    className?: string;
}
