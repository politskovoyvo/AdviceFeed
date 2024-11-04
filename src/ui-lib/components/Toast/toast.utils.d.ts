import { IToastOption, TToastId, TToastPosition, TToastState } from './models';
export declare const findById: (arr: IToastOption[], id: TToastId) => IToastOption | undefined;
export declare function getToastPosition(toasts: TToastState, id: TToastId): TToastPosition | undefined;
export declare function findToast(toasts: TToastState, id: TToastId): {
    position: TToastPosition | undefined;
    index: number;
};
export declare const isVisible: (toasts: TToastState, id: TToastId) => boolean;
