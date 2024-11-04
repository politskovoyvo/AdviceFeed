import { useEffect } from 'react';
export declare function sortNodes(nodes: Node[]): Node[];
export declare const isElement: (el: any) => el is HTMLElement;
export declare function getNextIndex(current: number, max: number, loop: boolean): number;
export declare function getPrevIndex(current: number, max: number, loop: boolean): number;
export declare const useSafeLayoutEffect: typeof useEffect;
export declare const cast: <T>(value: any) => T;
