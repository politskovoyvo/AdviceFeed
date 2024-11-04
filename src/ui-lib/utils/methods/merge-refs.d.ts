import { MutableRefObject, Ref, RefObject } from 'react';
export type ReactRef<T> = Ref<T> | RefObject<T> | MutableRefObject<T>;
export declare function assignRef<T = any>(ref: ReactRef<T> | undefined, value: T): void;
export declare function mergeRefs<T>(...refs: (ReactRef<T> | undefined)[]): (node: T | null) => void;
