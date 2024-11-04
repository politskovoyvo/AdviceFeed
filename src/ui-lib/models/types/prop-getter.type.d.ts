import { AriaAttributes, AriaRole, CSSProperties, DOMAttributes, Ref, RefAttributes } from 'react';
export interface IDOMElement extends Element, HTMLOrSVGElement {
}
export type Merge<M, N> = N extends Record<string, unknown> ? M : Omit<M, keyof N> & N;
export interface IDataAttributes {
    [dataAttr: string]: any;
}
export type TDOMAttributes<T = IDOMElement> = AriaAttributes & DOMAttributes<T> & IDataAttributes & {
    id?: string;
    role?: AriaRole;
    tabIndex?: number;
    style?: CSSProperties;
};
export type TPropGetter<P = Record<string, unknown>, R = TDOMAttributes> = (props?: Merge<TDOMAttributes, P>, ref?: Ref<any>, targetRefName?: string) => R & RefAttributes<any>;
