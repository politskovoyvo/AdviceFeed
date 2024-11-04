/// <reference types="react" />
import { TUseDialogState } from './models';
export declare function useDialogState(props?: TUseDialogState): {
    isOpen: boolean;
    open: () => void;
    close: () => void;
    toggle: () => void;
    isControlled: boolean;
    getButtonProps: (buttonProps?: import("react").HTMLAttributes<HTMLElement>) => import("react").HTMLAttributes<HTMLElement>;
    getDisclosureProps: (disclosureProps?: import("react").HTMLAttributes<HTMLElement>) => import("react").HTMLAttributes<HTMLElement>;
};
