import { ComponentPropsWithoutRef, JSX, JSXElementConstructor, ReactNode } from 'react';
import { TTextColor } from './text-color.type';
import { TTextSize } from './text-size.type';
type ReactTag = keyof JSX.IntrinsicElements | JSXElementConstructor<any>;
export type TTextProps<TTag extends ReactTag = ReactTag> = {
    /** @default span */
    as?: TTag;
    className?: string;
    /** @default false */
    disabled?: boolean;
    tooltip?: ReactNode;
    /** @default base */
    size?: TTextSize;
    /** @default default */
    color?: TTextColor;
} & ComponentPropsWithoutRef<TTag>;
export {};
