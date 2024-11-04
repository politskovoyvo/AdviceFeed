export interface IUseDrawerProps {
    isOpen: boolean;
    close(): void;
    open?(): void;
    /** @default true */
    overlayClosable?: boolean;
    /** @default true */
    overlayExist?: boolean;
    /** @default true */
    closable?: boolean;
    /** @default true */
    outsideClosable?: boolean;
    /** @default false */
    safe?: boolean;
}
