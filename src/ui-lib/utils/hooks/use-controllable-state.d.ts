import { Dispatch, SetStateAction } from 'react';
export declare function useControllableProp<T>(prop: T | undefined, state: T): [boolean, T];
export interface UseControllableStateProps<T> {
    value?: T;
    defaultValue?: T | (() => T);
    onChange?: (value: T) => void;
    shouldUpdate?: (prev: T, next: T) => boolean;
}
export declare function useControllableState<T>(props: UseControllableStateProps<T>): [T, Dispatch<SetStateAction<T>>];
