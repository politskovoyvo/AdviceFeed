import { ReactNode } from 'react';
export type TRenderNode<T> = ReactNode | ((props: T) => ReactNode);
