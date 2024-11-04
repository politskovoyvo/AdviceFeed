import { Provider } from 'react';
import { DescendantsManager } from './descendants';
import { TDescendantOptions } from './models';
declare function useDescendants<T extends HTMLElement = HTMLElement, K extends Record<string, any> = {}>(): DescendantsManager<T, K>;
export type TUseDescendantsReturn = ReturnType<typeof useDescendants>;
export declare function createDescendantContext<T extends HTMLElement = HTMLElement, K extends Record<string, any> = {}>(): readonly [Provider<DescendantsManager<T, K>>, () => DescendantsManager<T, K>, () => DescendantsManager<T, K>, (options?: TDescendantOptions<K>) => {
    descendants: DescendantsManager<HTMLElement, Record<string, any>>;
    index: number;
    enabledIndex: number;
    register: (node: T | null) => void;
}];
export {};
