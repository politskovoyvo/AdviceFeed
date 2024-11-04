export interface IUseModalProps {
    isOpen: boolean;
    close(): void;
    /** @default true */
    overlayClosable?: boolean;
    /** @default true */
    overlayExist?: boolean;
    /** @default true */
    closable?: boolean;
    /** @default false */
    safe?: boolean;
}
