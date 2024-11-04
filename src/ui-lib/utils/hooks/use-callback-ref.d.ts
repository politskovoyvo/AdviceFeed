import { DependencyList } from 'react';
export declare function useCallbackRef<T extends (...args: any[]) => any>(fn: T | undefined, deps?: DependencyList): T;
