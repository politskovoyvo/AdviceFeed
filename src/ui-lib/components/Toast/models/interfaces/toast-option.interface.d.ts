import { TToastId, TToastMessage, TToastPosition, TToastStatus } from '../types';
export interface IToastOption {
    message: TToastMessage;
    id: TToastId;
    duration: number | null;
    status: TToastStatus;
    onRequestRemove(): void;
    position: TToastPosition;
    onClosed?(): void;
}
