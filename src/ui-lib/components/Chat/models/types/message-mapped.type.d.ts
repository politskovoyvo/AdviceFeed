import { IChatEditMessage, IChatHistoryMessage, IChatMessage, IMessageMapped } from '../interfaces';
export type TChatMessageMapped = IMessageMapped & IChatMessage;
export type TEditMessageMapped = IMessageMapped & IChatEditMessage;
export type THistoryMessageMapped = IMessageMapped & IChatHistoryMessage;
export type TMessageMapped = TChatMessageMapped | TEditMessageMapped | THistoryMessageMapped;
