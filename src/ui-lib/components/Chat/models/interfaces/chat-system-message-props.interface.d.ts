import { ReactNode } from 'react';
import { TEditMessageMapped, THistoryMessageMapped } from '../types';
export interface IChatSystemMessageProps {
    message: TEditMessageMapped | THistoryMessageMapped;
    children: ReactNode;
}
