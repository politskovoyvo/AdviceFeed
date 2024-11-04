import { TToastCreateOptions, TToastId, TToastMessage } from '../types';
import { IToastPositionClose } from './toast-position-close.interface';
import { IToast } from './toast.interfaces';
export interface IToastMethods {
    notify: (message: TToastMessage, options?: TToastCreateOptions) => TToastId;
    closeAll: (options?: IToastPositionClose) => void;
    close: (id: TToastId) => void;
    update: (id: TToastId, options: Omit<IToast, 'id'>) => void;
    isActive: (id: TToastId) => boolean;
}
