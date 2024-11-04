import { IToastOption } from './toast-option.interface';
export interface IToastProps extends IToastOption {
    onClose?: () => void;
}
