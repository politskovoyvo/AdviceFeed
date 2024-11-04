import { RefObject } from 'react';
interface IOutsideParentClick {
    callback: () => void | unknown;
    parent: RefObject<HTMLElement>;
    enabled: boolean;
    refObject?: RefObject<HTMLElement>;
    isIgnoreTouches?: boolean;
}
export declare const useOutsideParentClick: <T extends HTMLElement>(config: IOutsideParentClick) => RefObject<HTMLElement>;
export {};
