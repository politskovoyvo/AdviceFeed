import { HTMLAttributes, ReactNode } from 'react';
export interface ISliderMarkProps extends HTMLAttributes<HTMLSpanElement> {
    value: number;
    noneStyles?: boolean;
    className?: string;
    children: ReactNode;
}
