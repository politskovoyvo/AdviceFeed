/// <reference types="react" />
import { TCharInputContext } from './models';
export declare const CharInputProvider: import("react").Provider<TCharInputContext>, useCharInputContext: () => TCharInputContext;
export declare const CharInputDescendantsProvider: import("react").Provider<import("../Descendants").DescendantsManager<HTMLInputElement, {}>>, useCharInputDescendantsContext: () => import("../Descendants").DescendantsManager<HTMLInputElement, {}>, useCharInputDescendants: () => import("../Descendants").DescendantsManager<HTMLInputElement, {}>, useCharInputDescendant: (options?: {
    disabled?: boolean | undefined;
    id?: string | undefined;
} | undefined) => {
    descendants: import("../Descendants").DescendantsManager<HTMLElement, Record<string, any>>;
    index: number;
    enabledIndex: number;
    register: (node: HTMLInputElement | null) => void;
};
