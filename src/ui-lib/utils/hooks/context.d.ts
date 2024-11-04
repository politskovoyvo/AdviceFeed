import { Context, Provider } from 'react';
export interface CreateContextOptions<T> {
    required?: boolean;
    hookName?: string;
    providerName?: string;
    errorMessage?: string;
    name?: string;
    defaultValue?: T;
}
export type TCreateContextReturn<T> = [Provider<T>, () => T, Context<T>];
export declare function createContext<T>(options?: CreateContextOptions<T>): TCreateContextReturn<T>;
