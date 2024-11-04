import { HTMLAttributes } from 'react';
export interface IPaginationProps extends Omit<HTMLAttributes<HTMLElement>, 'onChange'> {
    total: number;
    onChange?(from: number, to: number): void;
    /** @default false */
    disabled?: boolean;
    /** @default false */
    readOnly?: boolean;
}
