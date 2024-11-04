import { HTMLAttributes, ReactNode } from 'react';
import { TRateSize } from '../types';
export interface IRateProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> {
    /** Количество значений
     * @default 5 */
    count?: number;
    /** @default true */
    clearable?: boolean;
    /** @default false */
    disabled?: boolean;
    /** @default false */
    readonly?: boolean;
    value?: number;
    onChange?(value: number): void;
    symbol?: ReactNode;
    /** @default false */
    decimal?: boolean;
    /** @default false */
    half?: boolean;
    /** @default medium */
    fieldSize?: TRateSize;
}
