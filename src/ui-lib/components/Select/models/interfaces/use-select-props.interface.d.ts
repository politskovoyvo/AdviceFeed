import { HTMLAttributes, RefObject } from 'react';
import { TUseDisclosureReturn } from '../../../../utils/hooks/use-disclosure';
import { ISelectOption, TOptionValue } from './select-option.interface';
export interface IUseSelectProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange' | 'children'> {
    disabled?: boolean;
    autocomplete?: boolean;
    loading?: boolean;
    multiply?: boolean;
    searchable?: boolean;
    isSearchOutSide?: boolean;
    isAllowClear?: boolean;
    value?: TOptionValue | TOptionValue[];
    list?: ISelectOption[];
    onChange?(v: TOptionValue | TOptionValue[] | undefined): void;
    onSearch?(query: string): void;
    onClear?(): void;
    disclosure: TUseDisclosureReturn;
    inputRef?: RefObject<HTMLInputElement>;
    onCancel?(): void;
}
