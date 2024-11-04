import { ComponentType, ReactNode } from 'react';
interface IComponent<P> {
    (props: P): JSX.Element | Element | ReactNode;
}
export interface IModalPropComponent<T extends object> {
    component?: ComponentType<T> | IComponent<T>;
    componentProps?: T;
}
export {};
