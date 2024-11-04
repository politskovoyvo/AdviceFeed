declare const defaultEventListeners: {
    scroll: boolean;
    resize: boolean;
};
export declare function getEventListenerOptions(value?: boolean | Partial<typeof defaultEventListeners>): {
    enabled?: boolean | undefined;
    options?: {
        scroll: boolean;
        resize: boolean;
    } | undefined;
};
export {};
