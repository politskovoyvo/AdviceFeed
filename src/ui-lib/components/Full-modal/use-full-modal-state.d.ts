/// <reference types="react" />
import { TUseFullModalStateProps } from './models';
export declare function useFullModalState(props?: TUseFullModalStateProps): {
    isOpen: boolean;
    open: () => void;
    close: () => void;
    toggle: () => void;
    isControlled: boolean;
    getButtonProps: (buttonProps?: import("react").HTMLAttributes<HTMLElement>) => import("react").HTMLAttributes<HTMLElement>;
    getDisclosureProps: (disclosureProps?: import("react").HTMLAttributes<HTMLElement>) => import("react").HTMLAttributes<HTMLElement>;
};
