import { ReactNode } from 'react';
import { TToastId, TToastPosition, TToastStatus } from '../types';
import { IToastOption } from './toast-option.interface';
import { IToastRender } from './toast-render.interface';
export interface IToast {
    position?: TToastPosition;
    duration?: IToastOption['duration'];
    render?(props: IToastRender): ReactNode;
    title?: ReactNode;
    description?: ReactNode;
    isClosable?: boolean;
    status?: TToastStatus;
    icon?: ReactNode;
    id?: TToastId;
    onClosed?(): void;
}
