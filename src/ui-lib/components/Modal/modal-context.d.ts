/// <reference types="react" />
export declare const ModalProvider: import("react").Provider<{
    isOpen: boolean;
    closable: boolean;
    overlayClosable: boolean;
    overlayExist: boolean;
    close: () => void;
    refModal: import("react").Ref<HTMLDivElement>;
    handleClose: () => void;
    id: string;
    safe: boolean | undefined;
}>, useModalContext: () => {
    isOpen: boolean;
    closable: boolean;
    overlayClosable: boolean;
    overlayExist: boolean;
    close: () => void;
    refModal: import("react").Ref<HTMLDivElement>;
    handleClose: () => void;
    id: string;
    safe: boolean | undefined;
};
