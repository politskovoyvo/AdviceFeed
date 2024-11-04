import { ReactNode } from 'react';
export type TMaybeRenderProps<P> = ReactNode | ((props: P) => ReactNode);
