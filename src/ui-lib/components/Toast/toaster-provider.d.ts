import { FC, PropsWithChildren } from 'react';
import { IToast, TToastProvider } from './models';
export declare const ToastDefault: IToast;
export declare const ToastOptionProvider: import("react").Context<TToastProvider>;
export declare const ToasterGenerator: FC<PropsWithChildren>;
export declare const ToastProvider: (props: TToastProvider) => import("react/jsx-runtime").JSX.Element;
