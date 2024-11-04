import { IToastMethods } from '../interfaces';
import { TToastId } from './toast-id.type';
import { TToastPosition } from './toast-position.type';
import { TToastState } from './toast-state.type';
export type TToastStore = IToastMethods & {
    getState(): TToastState;
    subscribe(onStoreChange: () => void): () => void;
    removeToast(id: TToastId, position: TToastPosition): void;
};
