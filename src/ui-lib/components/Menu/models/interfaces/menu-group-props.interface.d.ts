import { HTMLAttributes, ReactNode } from 'react';
export interface IMenuGroupProps extends Omit<HTMLAttributes<HTMLDivElement>, 'title'> {
    title?: ReactNode;
}
