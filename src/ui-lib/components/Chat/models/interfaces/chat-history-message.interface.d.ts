import { ReactNode } from 'react';
import { IChatMessage } from './chat-message.interface';
export interface IChatHistoryMessage extends Omit<IChatMessage, 'status'> {
    status: 'history-message';
    title: string;
    oldValue: ReactNode;
    newValue: ReactNode;
    comment?: string;
}
