import { HTMLAttributes } from 'react';
export interface IUseDisclosureProps {
    isOpen?: boolean;
    defaultIsOpen?: boolean;
    close?(): void;
    open?(): void;
    id?: string;
}
type THTMLProps = HTMLAttributes<HTMLElement>;
export declare function useDisclosure(props?: IUseDisclosureProps): {
    isOpen: boolean;
    open: () => void;
    close: () => void;
    toggle: () => void;
    isControlled: boolean;
    getButtonProps: (buttonProps?: THTMLProps) => THTMLProps;
    getDisclosureProps: (disclosureProps?: THTMLProps) => THTMLProps;
};
export type TUseDisclosureReturn = ReturnType<typeof useDisclosure>;
export {};
