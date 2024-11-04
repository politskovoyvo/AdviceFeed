import { FC } from 'react';
import { IToast, IToastRender, TToastId } from './models';
type MaybeFunction<T, Args extends unknown[] = []> = T | ((...args: Args) => T);
type UseToastPromiseOption = Omit<IToast, 'status'>;
export declare function createRenderToast(options?: IToast & {
    toastComponent?: FC<IToastRender>;
}): FC<IToastRender>;
export declare function createToastFn(defaultOptions?: IToast): {
    (options?: IToast): TToastId;
    update(id: TToastId, options: Omit<IToast, 'id'>): void;
    promise<Result, Err extends Error = Error>(promise: Promise<Result>, options: {
        success: MaybeFunction<IToast, [Result]>;
        error: MaybeFunction<IToast, [Err]>;
        loading: UseToastPromiseOption;
    }): void;
    closeAll: (options?: import("./models").IToastPositionClose | undefined) => void;
    close: (id: TToastId) => void;
    isActive: (id: TToastId) => boolean;
};
export type CreateToastFnReturn = ReturnType<typeof createToastFn>;
export {};
