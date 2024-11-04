import { Ref, RefObject } from 'react';
export declare const useOutsideClick: <T extends HTMLElement>(callback: () => void | unknown, refObject?: RefObject<T> | undefined) => Ref<T>;
