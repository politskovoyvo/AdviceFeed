import { HTMLAttributes } from 'react';
export interface IPaginationSizeProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> {
    value?: number;
    defaultValue?: number;
    /** @default [10, 20, 50] */
    options?: number[];
    onChange?(value: number): void;
}
