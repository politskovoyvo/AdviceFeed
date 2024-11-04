export type TOptionLabel = string | number;
export type TOptionValue = any;
export interface ISelectOption<V = TOptionValue, T = any> {
    label: TOptionLabel;
    value: V;
    disabled?: boolean;
    hide?: boolean;
    extra?: T;
}
export interface ISelectAttachedOption<T = any> extends ISelectOption<T> {
    text: string;
    key: string;
}
