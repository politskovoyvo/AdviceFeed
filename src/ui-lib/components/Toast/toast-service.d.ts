import { IToast } from './models';
import { CreateToastFnReturn } from './toast-render';
export declare class ToastService {
    toast: CreateToastFnReturn;
    constructor(options?: IToast);
    open(options?: IToast): import("./models").TToastId;
}
