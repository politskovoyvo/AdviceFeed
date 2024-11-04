import { IChatProps } from '../interfaces';
export type TUseChatProps = Omit<IChatProps, 'disabled' | 'readOnly'>;
