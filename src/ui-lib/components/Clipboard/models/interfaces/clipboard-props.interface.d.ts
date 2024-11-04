import { ButtonHTMLAttributes } from 'react';
export interface IClipboardProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    data: string;
    /** @default Скопировать */
    toCopyText?: string;
    /** @default Скопироавно! */
    copiedText?: string;
    /** @default true */
    showIcon?: boolean;
    /** @default false */
    custom?: boolean;
}
