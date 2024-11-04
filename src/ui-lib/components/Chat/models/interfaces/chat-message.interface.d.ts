import { TChatMessageStatus } from '../types';
export interface IChatMessage {
    message: string;
    date: string | number | Date;
    isAuthor: boolean;
    sender?: string;
    status?: TChatMessageStatus;
}
