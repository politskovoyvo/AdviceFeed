import { IToastOption } from '../interfaces';
import { TToastPosition } from './toast-position.type';
export type TToastState = {
    [key in TToastPosition]: IToastOption[];
};
