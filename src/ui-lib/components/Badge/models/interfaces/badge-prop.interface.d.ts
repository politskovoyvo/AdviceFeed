import { HTMLAttributes } from 'react';
import { TBadgeColor, TBadgeShape, TBadgeSize, TBadgeTheme } from '../types';
export interface IBadgeProps extends HTMLAttributes<HTMLSpanElement> {
    color?: TBadgeColor;
    theme?: TBadgeTheme;
    shape?: TBadgeShape;
    fieldSize?: TBadgeSize;
}
