import { UIKitLocalStorage } from '../../models';
export declare const setLocalStorageValue: <T extends keyof UIKitLocalStorage>(key: T, value: UIKitLocalStorage[T]) => void;
export declare const getLocalStorageValue: <T extends keyof UIKitLocalStorage>(key: T) => UIKitLocalStorage[T];
