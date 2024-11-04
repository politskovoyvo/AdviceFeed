/// <reference types="react" />
import { IUseFullModalProps } from './models';
export type TUseFullModalReturn = ReturnType<typeof useFullModal>;
export declare function useFullModal(props: IUseFullModalProps): {
    isOpen: boolean;
    closable: boolean;
    close: () => void;
    refModal: import("react").Ref<HTMLDivElement>;
    handleClose: () => void;
    id: string;
};
