import { HTMLAttributes, ReactNode } from 'react';
import { TDrawerId, TDrawerPosition } from '../types';
import { IUseDrawerProps } from './use-drawer-props.interface';
export interface IDrawerProps extends IUseDrawerProps, Pick<HTMLAttributes<HTMLDivElement>, 'style'> {
    id?: TDrawerId;
    children?: ReactNode;
    noneStyles?: boolean;
    position?: TDrawerPosition;
    className?: string;
    overlayExist?: boolean;
    overlayClassName?: string;
    afterOpen?: () => void;
    afterClose?: () => void;
}
