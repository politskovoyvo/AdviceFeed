import { TailwindObject, TailwindOwnObject } from '../../../models';
import { TInputAppendixPosition, TInputSize } from '../models';
export type TLabelSizePadding = TInputAppendixPosition | 'both' | 'default';
export declare const InputSizesLabel: TailwindObject<TInputSize>;
export declare const InputSizesInput: TailwindObject<TInputSize>;
export declare const InputSizesIcon: TailwindObject<TInputSize>;
export declare const InputSizesLabelPadding: TailwindOwnObject<TInputSize, {
    [key in TLabelSizePadding]: string;
}>;
