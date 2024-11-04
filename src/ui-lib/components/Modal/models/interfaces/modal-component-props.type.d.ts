import { ReactNode } from 'react';
import { IModalProps } from './index';
export interface IModalComponentProps extends Pick<IModalProps, 'className' | 'noneStyles' | 'centered'> {
    children?: ReactNode;
}
