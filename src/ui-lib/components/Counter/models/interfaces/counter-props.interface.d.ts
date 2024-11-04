import { TCounterSize } from '../types';
export interface ICounterProps {
    value?: number;
    /** @default 0 */
    defaultValue?: number;
    onChange?(value: number): void;
    /**  @default false */
    readOnly?: boolean;
    /**  @default false */
    disabled?: boolean;
    className?: string;
    name?: string;
    /**  @default MIN_SAFE_INTEGER */
    min?: number;
    /**  @default MAX_SAFE_INTEGER */
    max?: number;
    /**  @default 1 */
    step?: number;
    /** @default large */
    fieldSize?: TCounterSize;
}
