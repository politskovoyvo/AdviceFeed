import { ReactNode } from 'react';
import { IDrawerContentProps } from '../../../Drawer/models';
export type TMobileDrawerContentProps = Omit<IDrawerContentProps, 'children'> & {
    children: ReactNode | ((params: {
        expanded: boolean;
        isDragging: boolean;
    }) => ReactNode);
};
