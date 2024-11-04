export interface IElementSize {
    width: number;
    height: number;
}
export declare function observeElementSize(element: HTMLElement | null, callback: (size: IElementSize | undefined) => void): void | (() => void);
