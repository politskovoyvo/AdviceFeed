/// <reference types="react" />
import { TUseDrawerStateProps } from './models';
export declare function useDrawerState(props?: TUseDrawerStateProps): {
    isOpen: boolean;
    open: () => void;
    close: () => void;
    toggle: () => void;
    isControlled: boolean;
    getButtonProps: (buttonProps?: import("react").HTMLAttributes<HTMLElement>) => import("react").HTMLAttributes<HTMLElement>;
    getDisclosureProps: (disclosureProps?: import("react").HTMLAttributes<HTMLElement>) => import("react").HTMLAttributes<HTMLElement>;
};
