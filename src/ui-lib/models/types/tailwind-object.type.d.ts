export type TailwindObject<T extends string | number | symbol> = {
    [key in T]: string;
};
export type TailwindOwnObject<T extends string | number | symbol, B> = {
    [key in T]: B;
};
