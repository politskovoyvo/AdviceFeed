import { FC, PropsWithChildren } from 'react';
import { IToast, IToastProps } from '../interfaces';
export type TToastProvider = PropsWithChildren<{
    defaultOptions?: IToast;
    component?: FC<IToastProps>;
}>;
