import { HTMLAttributes } from 'react';
export interface IPaginationStepsProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> {
    value?: number;
    /** @default 1 */
    defaultValue?: number;
    onChange?(index: number): void;
}
