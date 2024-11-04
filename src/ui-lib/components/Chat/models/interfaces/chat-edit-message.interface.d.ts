import { IChatMessage } from './chat-message.interface';
export interface IChatEditMessage extends Omit<IChatMessage, 'status'> {
    status: 'edit-message';
    title: string;
}
