import { ButtonHTMLAttributes } from 'react';
import { IUseTabOptions } from './use-tab-options.interface';
export interface ITabProps extends IUseTabOptions, Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'disabled'> {
    count?: number;
}
