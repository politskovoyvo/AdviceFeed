/// <reference types="react" />
import { IUseDrawerProps } from './models';
export type TUseDrawerReturn = ReturnType<typeof useDrawer>;
export declare function useDrawer(props: IUseDrawerProps): {
    isOpen: boolean;
    closable: boolean;
    overlayClosable: boolean;
    overlayExist: boolean;
    close: () => void;
    refDrawer: import("react").Ref<HTMLDivElement>;
    handleClose: () => void;
    id: string;
    safe: boolean | undefined;
    htmlProps: {};
};
