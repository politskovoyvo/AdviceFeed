import { ReactNode } from 'react';
import { IToastRender } from '../interfaces';
export type TToastMessage = (props: IToastRender) => ReactNode;
