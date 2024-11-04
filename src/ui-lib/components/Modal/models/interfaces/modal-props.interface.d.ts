import { ReactNode } from 'react';
import { TModalId } from '../types';
import { IUseModalProps } from './use-modal-props.interface';
export interface IModalProps extends IUseModalProps {
    id?: TModalId;
    children?: ReactNode;
    /** @default false */
    noneStyles?: boolean;
    className?: string;
    /** @default true */
    overlayExist?: boolean;
    overlayClassName?: string;
    /** @default true */
    centered?: boolean;
    afterOpen?: () => void;
    afterClose?: () => void;
}
