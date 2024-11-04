/// <reference types="react" />
export declare const FullModalProvider: import("react").Provider<{
    isOpen: boolean;
    closable: boolean;
    close: () => void;
    refModal: import("react").Ref<HTMLDivElement>;
    handleClose: () => void;
    id: string;
}>, useFullModalContext: () => {
    isOpen: boolean;
    closable: boolean;
    close: () => void;
    refModal: import("react").Ref<HTMLDivElement>;
    handleClose: () => void;
    id: string;
};
