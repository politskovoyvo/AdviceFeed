export declare function debounce<Args extends unknown[]>(fn: (...args: Args) => void, delay: number): {
    (...args: Args): void;
    flush(): void;
};
