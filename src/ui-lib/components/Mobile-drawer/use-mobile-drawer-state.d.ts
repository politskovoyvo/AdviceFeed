/// <reference types="react" />
import { TUseMobileDrawerStateProps } from './models';
export declare function useMobileDrawerState(props?: TUseMobileDrawerStateProps): {
    isOpen: boolean;
    open: () => void;
    close: () => void;
    toggle: () => void;
    isControlled: boolean;
    getButtonProps: (buttonProps?: import("react").HTMLAttributes<HTMLElement>) => import("react").HTMLAttributes<HTMLElement>;
    getDisclosureProps: (disclosureProps?: import("react").HTMLAttributes<HTMLElement>) => import("react").HTMLAttributes<HTMLElement>;
};
