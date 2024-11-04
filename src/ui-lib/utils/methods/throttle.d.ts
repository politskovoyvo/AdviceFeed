export declare function throttle<Args extends unknown[]>(fn: (...args: Args) => void, cooldown: number): (...args: Args) => void;
