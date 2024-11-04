import { InputHTMLAttributes, ReactNode } from 'react';
import type { ButtonSizeType, ButtonThemeType } from './models';
export interface UIButtonProps extends InputHTMLAttributes<HTMLButtonElement> {
    className?: string;
    children: ReactNode;
    theme?: ButtonThemeType;
    fieldSize?: ButtonSizeType;
    type?: 'submit' | 'reset' | 'button';
    disabled?: boolean;
    loading?: boolean;
}
export declare const UIButton: import("react").ForwardRefExoticComponent<UIButtonProps & import("react").RefAttributes<HTMLButtonElement>>;
