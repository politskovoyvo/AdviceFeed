type TTarget = EventTarget | null | (() => EventTarget | null);
type TOptions = boolean | AddEventListenerOptions;
export declare function useEventListener<K extends keyof DocumentEventMap>(target: TTarget, event: K, handler?: (event: DocumentEventMap[K]) => void, options?: TOptions): VoidFunction;
export declare function useEventListener<K extends keyof WindowEventMap>(target: TTarget, event: K, handler?: (event: WindowEventMap[K]) => void, options?: TOptions): VoidFunction;
export declare function useEventListener<K extends keyof GlobalEventHandlersEventMap>(target: TTarget, event: K, handler?: (event: GlobalEventHandlersEventMap[K]) => void, options?: TOptions): VoidFunction;
export {};
