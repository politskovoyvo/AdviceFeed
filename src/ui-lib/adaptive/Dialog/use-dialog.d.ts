/// <reference types="react" />
import { TDialog, TUseDialogProps } from './models';
export type TUseDialogReturn = ReturnType<typeof useDialog>;
export declare function useDialog(props: TUseDialogProps): {
    Component: TDialog;
    componentProps: {
        style?: import("react").CSSProperties | undefined;
        position?: import("../../components/Drawer/models").TDrawerPosition | undefined;
        open?: (() => void) | undefined;
        className?: string | undefined;
        draggable?: boolean | undefined;
        id?: string | number | undefined;
        close: (() => void) & (() => void);
        safe?: boolean | undefined;
        isOpen: boolean;
        closable?: boolean | undefined;
        overlayClosable?: boolean | undefined;
        overlayExist?: boolean | undefined;
        outsideClosable?: boolean | undefined;
        noneStyles?: boolean | undefined;
        overlayClassName?: string | undefined;
        afterOpen?: ((() => void) & (() => void)) | undefined;
        afterClose?: ((() => void) & (() => void)) | undefined;
        expandable?: boolean | undefined;
        expandedDefault?: boolean | undefined;
        centered?: boolean | undefined;
    };
};
