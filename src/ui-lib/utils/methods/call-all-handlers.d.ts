type Args<T extends Function> = T extends (...args: infer R) => any ? R : never;
export declare function callAllHandlers<T extends (event: any) => void>(...fns: (T | undefined)[]): (event: Args<T>[0]) => void;
export {};
