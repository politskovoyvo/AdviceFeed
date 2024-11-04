import { ReactNode } from 'react';
import { IUseFullModalProps } from './use-modal-props.interface';
export interface IFullModalProps extends IUseFullModalProps {
    children?: ReactNode;
    className?: string;
    noneStyles?: boolean;
    overlayClassName?: string;
    afterClose?(): void;
    afterOpen?(): void;
}
