/// <reference types="react" />
import { TUseModalStateProps } from './models';
export declare function useModalState(props?: TUseModalStateProps): {
    isOpen: boolean;
    open: () => void;
    close: () => void;
    toggle: () => void;
    isControlled: boolean;
    getButtonProps: (buttonProps?: import("react").HTMLAttributes<HTMLElement>) => import("react").HTMLAttributes<HTMLElement>;
    getDisclosureProps: (disclosureProps?: import("react").HTMLAttributes<HTMLElement>) => import("react").HTMLAttributes<HTMLElement>;
};
