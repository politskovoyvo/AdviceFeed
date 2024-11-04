export type LazyMode = 'unmount' | 'keepMounted';
interface LazyOptions {
    enabled?: boolean;
    isSelected?: boolean;
    wasSelected?: boolean;
    mode?: LazyMode;
}
export declare function lazyDisclosure(options: LazyOptions): boolean;
export {};
