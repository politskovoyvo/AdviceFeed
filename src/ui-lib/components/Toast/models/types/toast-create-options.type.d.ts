import { IToastOption } from '../interfaces';
export type TToastCreateOptions = Partial<Pick<IToastOption, 'status' | 'duration' | 'position' | 'id' | 'onClosed'>>;
