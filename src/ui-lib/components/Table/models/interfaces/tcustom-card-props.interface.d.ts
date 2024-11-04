import { ReactNode } from 'react';
export interface ITCustomCardProps<T> {
    data: T[];
    children: ReactNode | ((params: T) => ReactNode);
    className?: string;
}
