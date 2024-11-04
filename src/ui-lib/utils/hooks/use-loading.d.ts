interface TUseLoadingParams<T, P> {
    method(args: P): Promise<T>;
    data?: T;
    loading?: boolean;
}
export declare function useLoading<T = any, P = unknown[]>(params: TUseLoadingParams<T, P>): {
    data: T;
    loading: boolean;
    emit: (args: P) => Promise<T>;
    update: (d: T) => void;
};
export {};
