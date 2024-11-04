import { ReactNode } from 'react';
export interface IModalFooterProps {
    children: ReactNode;
    /** @default false */
    noneStyles?: boolean;
    className?: string;
}
