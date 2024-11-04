import { ReactNode } from 'react';
export interface IModalHeaderProps {
    children: ReactNode;
    /** @default false */
    noneStyles?: boolean;
    className?: string;
}
