import { FC } from 'react';
import { ISelectOption } from './select-option.interface';
export interface ISelectValue {
    selectedTemplate?: FC<ISelectOption>;
}
