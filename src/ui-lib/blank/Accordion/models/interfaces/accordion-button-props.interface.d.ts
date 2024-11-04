import { ButtonHTMLAttributes, ReactNode } from 'react';
export interface IAccordionButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'title'> {
    /** @default true */
    showDirection?: boolean;
    title?: ReactNode;
    description?: string;
}
