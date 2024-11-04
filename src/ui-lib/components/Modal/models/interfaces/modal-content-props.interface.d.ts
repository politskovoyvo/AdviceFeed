import { ReactNode } from 'react';
export interface IModalContentProps {
    children: ReactNode;
    /** @default false */
    noneStyles?: boolean;
    className?: string;
}
