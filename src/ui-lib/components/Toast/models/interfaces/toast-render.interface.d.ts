import { IToast } from './toast.interfaces';
export interface IToastRender extends IToast {
    onClose?(): void;
}
