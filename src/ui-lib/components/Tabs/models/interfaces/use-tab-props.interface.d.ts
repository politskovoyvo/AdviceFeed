import { Ref } from 'react';
import { IUseTabOptions } from './use-tab-options.interface';
export interface IUseTabProps extends IUseTabOptions {
    ref?: Ref<any>;
    onClick?(event: any): void;
    onFocus?(event: any): void;
    isFocusable?: boolean;
}
