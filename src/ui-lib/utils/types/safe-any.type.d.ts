export type TSafeAny<T = object> = {
    [k in keyof T]?: TSafeAny<T[k]>;
} | boolean | number | string | symbol | null | undefined;
