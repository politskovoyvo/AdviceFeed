import { HTMLAttributes } from 'react';
import type { NavLinkProps } from 'react-router-dom';
export interface ILinkNavigation extends NavLinkProps, Omit<HTMLAttributes<HTMLAnchorElement>, 'children' | 'className' | 'style' | 'href'> {
}
