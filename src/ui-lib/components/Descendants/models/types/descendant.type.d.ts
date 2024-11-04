import { TDescendantOptions } from './descendant-options.type';
export type TDescendant<T, K> = TDescendantOptions<K> & {
    node: T;
    index: number;
};
