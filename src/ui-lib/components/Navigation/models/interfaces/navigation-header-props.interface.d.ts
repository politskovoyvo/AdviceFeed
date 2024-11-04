import { HTMLAttributes } from 'react';
export interface INavigationHeaderProps extends HTMLAttributes<HTMLDivElement> {
    title: string;
    icon: string;
    description?: string;
    to?: string;
    themeSwitcher?: boolean;
}
