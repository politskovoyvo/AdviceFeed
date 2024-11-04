import { ISelectAttachedOption, ISelectOption, TOptionValue } from './models';
import { ISelectedStore } from './use-select';
export declare const valueKey: (value: string | number | object) => string;
export declare function attachList(options: ISelectOption[] | undefined): ISelectAttachedOption[] | undefined;
export declare function filterOptionsByQuery(list: ISelectAttachedOption[] | undefined, query: string): ISelectAttachedOption<any>[] | undefined;
export declare function findSelectedValues(value?: TOptionValue | TOptionValue[], list?: ISelectOption[]): ISelectAttachedOption[];
export declare function findSelectedStore(selected: ISelectOption[]): ISelectedStore;
interface IDefaultState {
    selected: ISelectAttachedOption[];
    store: ISelectedStore;
    value?: TOptionValue | TOptionValue[];
}
export declare function initDefault(list?: ISelectOption[], value?: TOptionValue | TOptionValue[]): IDefaultState;
export {};
