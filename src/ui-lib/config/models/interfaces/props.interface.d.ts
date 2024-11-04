import { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { LinkProps, NavLinkProps, To } from 'react-router-dom';
export type ComponentsProps = {
    [Name in keyof ComponentsPropsList]: Partial<ComponentsPropsList[Name]>;
};
export interface ComponentsPropsList {
    Link: {
        component: 'a' | ForwardRefExoticComponent<Omit<LinkProps, 'to'> & {
            href: To;
        } & {
            to: To;
        } & RefAttributes<HTMLAnchorElement>>;
    };
    LinkNavigation: {
        component: 'a' | ForwardRefExoticComponent<Omit<NavLinkProps, 'to'> & {
            href: To;
        } & {
            to: To;
        } & RefAttributes<HTMLAnchorElement>>;
    };
}
