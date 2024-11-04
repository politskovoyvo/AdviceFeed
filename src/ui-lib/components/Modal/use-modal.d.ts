/// <reference types="react" />
import { IUseModalProps } from './models';
export type TUseModalReturn = ReturnType<typeof useModal>;
export declare function useModal(prop: IUseModalProps): {
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
