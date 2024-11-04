import { TDescendant, TDescendantOptions } from './models';
export declare class DescendantsManager<T extends HTMLElement, K extends Record<string, any> = {}> {
    private descendants;
    register: (nodeOrOptions: T | null | TDescendantOptions<K>) => void | ((node: T | null) => void);
    unregister: (node: T) => void;
    destroy: () => void;
    private assignIndex;
    count: () => number;
    enabledCount: () => number;
    values: () => TDescendant<T, K>[];
    enabledValues: () => TDescendant<T, K>[];
    item: (index: number) => TDescendant<T, K> | undefined;
    enabledItem: (index: number) => TDescendant<T, K> | undefined;
    first: () => TDescendant<T, K> | undefined;
    firstEnabled: () => TDescendant<T, K> | undefined;
    last: () => TDescendant<T, K> | undefined;
    lastEnabled: () => TDescendant<T, K> | undefined;
    indexOf: (node: T | null) => number;
    enabledIndexOf: (node: T | null) => number;
    next: (index: number, loop?: boolean) => TDescendant<T, K> | undefined;
    nextEnabled: (index: number, loop?: boolean) => TDescendant<T, K> | undefined;
    prev: (index: number, loop?: boolean) => TDescendant<T, K> | undefined;
    prevEnabled: (index: number, loop?: boolean) => TDescendant<T, K> | undefined;
    private registerNode;
}
