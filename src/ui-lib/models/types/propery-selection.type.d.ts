export type PropertySelectionType<S extends boolean | undefined, T, F> = S extends true ? T : F;
