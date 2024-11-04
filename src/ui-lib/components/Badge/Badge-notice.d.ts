/// <reference types="react" />
import { IBadgeProps } from './models';
export type BadgeNoticePropsType = Omit<IBadgeProps, 'size'> & {
    count?: number | string;
};
export declare const UIBadgeNotice: import("react").ForwardRefExoticComponent<Omit<IBadgeProps, "size"> & {
    count?: string | number | undefined;
} & import("react").RefAttributes<HTMLDivElement>>;
