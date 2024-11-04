import { TSliderOrientation } from '../types';
export interface IUseSliderProps {
    /** @default 0 */
    min?: number;
    /** @default 100 */
    max?: number;
    /** @default 1 */
    step?: number;
    /** @default horizontal */
    orientation?: TSliderOrientation;
    /** @default false */
    disabled?: boolean;
    /** @default false */
    readOnly?: boolean;
    defaultValue?: number;
    value?: number;
    onChange?(value: number): void;
    onChangeStart?(value: number): void;
    onChangeEnd?(value: number): void;
    id?: string;
    name?: string;
}
