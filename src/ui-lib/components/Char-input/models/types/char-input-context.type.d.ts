import { TUseCharInputReturn } from '../../use-char-input';
export type TCharInputContext = Omit<TUseCharInputReturn, 'htmlProps' | 'descendants'>;
