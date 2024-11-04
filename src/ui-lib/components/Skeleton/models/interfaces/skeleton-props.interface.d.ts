import { HTMLAttributes } from 'react';
import { TTextSize } from '../../../Text/models';
import { TShape } from '../types';
export interface ISkeletonProps extends HTMLAttributes<HTMLDivElement> {
    /** @default false */
    animation?: boolean;
    /** @default default */
    shape?: TShape;
    text?: TTextSize;
    /** @default true */
    loading?: boolean;
}
