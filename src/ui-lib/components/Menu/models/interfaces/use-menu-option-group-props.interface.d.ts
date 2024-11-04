import { ReactNode } from 'react';
export interface IUseMenuOptionGroupProps {
    value?: unknown;
    defaultValue?: string | string[];
    type?: 'radio' | 'checkbox';
    onChange?: (value: unknown) => void;
    children?: ReactNode;
}
